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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Qwilfish_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Sting", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned." },
      { name: "Needle Storm", cost: [], damage: "20×", text: "Flip a coin until you get tails. This attack does 20 damage times the number of heads you get." }
  ];
  public set: string = "N3";
  public name: string = "Qwilfish";
  public fullName: string = "Qwilfish N3 49";
  public text: string = "Qwilfish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
