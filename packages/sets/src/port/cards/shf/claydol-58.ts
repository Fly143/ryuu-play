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

export class Claydol_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Baltoy";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Split", cost: [], damage: "", text: "Attach Psychic Energy cards from your discard pile to your Pokémon in any way you like until your Pokémon and your opponent's Pokémon have the same total amount of Energy attached." },
      { name: "Psyshot", cost: [], damage: "100", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Claydol";
  public fullName: string = "Claydol SHF 58";
  public text: string = "Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
