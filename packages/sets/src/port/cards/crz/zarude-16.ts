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

export class Zarude_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drag Off", cost: [], damage: "", text: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 20 damage to the new Active Pokémon." },
      { name: "Triple Whip", cost: [], damage: "70×", text: "Flip 3 coins. This attack does 70 damage for each heads." }
  ];
  public set: string = "CRZ";
  public name: string = "Zarude";
  public fullName: string = "Zarude CRZ 16";
  public text: string = "Zarude";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 70);
    }
    return state;
  }
}
