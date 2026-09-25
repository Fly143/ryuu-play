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

export class Flaaffy_422 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mareep";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electric Punch", cost: [], damage: "30", text: "" },
      { name: "Shock Bolt", cost: [], damage: "60", text: "Discard all Lightning Energy from this Pokémon." }
  ];
  public set: string = "UNB";
  public name: string = "Flaaffy";
  public fullName: string = "Flaaffy UNB 42";
  public text: string = "Flaaffy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
