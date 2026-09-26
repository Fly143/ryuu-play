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

export class GalarianPerrserker_181 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Meowth";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call to Muster", cost: [], damage: "", text: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Headbang", cost: [], damage: "80", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Galarian Perrserker";
  public fullName: string = "Galarian Perrserker EVS 181";
  public text: string = "Galarian Perrserker";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
