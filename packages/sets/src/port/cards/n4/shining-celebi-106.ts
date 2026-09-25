import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class ShiningCelebi_1062 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Water", cost: [], damage: "", text: "Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of Water Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them." },
      { name: "Miracle Leaf", cost: [], damage: "10", text: "Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice)." }
  ];
  public set: string = "N4";
  public name: string = "Shining Celebi";
  public fullName: string = "Shining Celebi N4 106";
  public text: string = "Shining Celebi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
