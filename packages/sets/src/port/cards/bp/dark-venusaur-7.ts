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

export class DarkVenusaur_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Ivysaur";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horrid Pollen", cost: [], damage: "30", text: "Flip 2 coins. If 1 is heads, the Defending Pokémon is now Asleep and Poisoned. If both are heads, the Defending Pokémon is now Confused and Poisoned. If both are tails, the Defending Pokémon is now Paralyzed and Poisoned." }
  ];
  public set: string = "BP";
  public name: string = "Dark Venusaur";
  public fullName: string = "Dark Venusaur BP 7";
  public text: string = "Dark Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
