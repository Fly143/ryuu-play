import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class SwampertEx_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Marshtomp";
  public hp: number = 150;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hyper Pump", cost: [], damage: "20+", text: "Does 20 damage plus 20 more damage for each basic Energy attached to Swampert ex but not used to pay for this attack's Energy cost. You can't add more than 80 damage in this way." },
      { name: "Crushing Wave", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. After doing damage, flip a coin. If heads, your opponent discards an Energy card, if any, attached to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "MA";
  public name: string = "Swampert ex";
  public fullName: string = "Swampert ex MA 95";
  public text: string = "Swampert ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
