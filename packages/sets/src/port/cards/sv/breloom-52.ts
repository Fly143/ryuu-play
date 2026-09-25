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

export class Breloom_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shroomish";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hover Hit", cost: [], damage: "40", text: "The Retreat Cost for the Defending Pokémon is 0 until the end of your next turn." },
      { name: "Crash Bomber", cost: [], damage: "20+", text: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 20 damage plus 40 more damage. Then, discard a Special Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "SV";
  public name: string = "Breloom";
  public fullName: string = "Breloom SV 52";
  public text: string = "Breloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
