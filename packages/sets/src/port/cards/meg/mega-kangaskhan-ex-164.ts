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

export class MegaKangaskhanEx_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 300;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Run Errand", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Draw 2 cards. You can't use more than 1 Run Errand Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rapid-Fire Combo", cost: [], damage: "200+", text: "Flip a coin until you get tails. This attack does 50 more damage for each heads." }
  ];
  public set: string = "MEG";
  public name: string = "Mega Kangaskhan ex";
  public fullName: string = "Mega Kangaskhan ex MEG 164";
  public text: string = "Mega Kangaskhan ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
