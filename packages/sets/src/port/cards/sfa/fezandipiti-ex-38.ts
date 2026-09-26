import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FezandipitiEx_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flip the Script", powerType: PowerType.ABILITY, text: "Once during your turn, if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 3 cards. You can't use more than 1 Flip the Script Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cruel Arrow", cost: [], damage: "", text: "This attack does 100 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SFA";
  public name: string = "Fezandipiti ex";
  public fullName: string = "Fezandipiti ex SFA 38";
  public text: string = "Fezandipiti ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 100);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
