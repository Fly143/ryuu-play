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

export class ShiningMew_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Legendary Guidance", cost: [], damage: "", text: "Search your deck for up to 2 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Beam", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SLG";
  public name: string = "Shining Mew";
  public fullName: string = "Shining Mew SLG 40";
  public text: string = "Shining Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
