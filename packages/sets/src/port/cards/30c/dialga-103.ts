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

export class Dialga_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reversed Clock", cost: [], damage: "", text: "Shuffle up to 3 in any combination of Pokémon and Basic Energy cards from your discard pile into your deck." },
      { name: "Heavy Impact", cost: [], damage: "110", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Dialga";
  public fullName: string = "Dialga 30C 103";
  public text: string = "Dialga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
