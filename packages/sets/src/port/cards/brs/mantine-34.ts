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

export class Mantine_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Borne Ashore", cost: [], damage: "", text: "Put a Basic Pokémon from either player's discard pile onto that player's Bench." },
      { name: "Aqua Edge", cost: [], damage: "100", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Mantine";
  public fullName: string = "Mantine BRS 34";
  public text: string = "Mantine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
