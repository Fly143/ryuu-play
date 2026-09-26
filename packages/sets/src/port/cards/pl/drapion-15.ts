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

export class Drapion_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skorupi";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scorpion Grapple", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Cross Poison", cost: [], damage: "20×", text: "Flip 4 coins. This attack does 20 damage times the number of heads. If 2 or more of them are heads, the Defending Pokémon is now Poisoned." },
      { name: "Derail", cost: [], damage: "60", text: "Discard all Special Energy cards attached to the Defending Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Drapion";
  public fullName: string = "Drapion PL 15";
  public text: string = "Drapion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
