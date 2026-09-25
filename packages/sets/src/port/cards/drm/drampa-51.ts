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

export class Drampa_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Wisdom", cost: [], damage: "20", text: "Attach a basic Energy card from your discard pile to 1 of your Dragon Pokémon." },
      { name: "Hyper Voice", cost: [], damage: "80", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Drampa";
  public fullName: string = "Drampa DRM 51";
  public text: string = "Drampa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
