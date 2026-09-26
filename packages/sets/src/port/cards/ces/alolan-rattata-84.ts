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

export class AlolanRattata_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call for the Boss", cost: [], damage: "", text: "Search your deck for Alolan Raticate or Alolan Raticate-GX, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Gnaw", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CES";
  public name: string = "Alolan Rattata";
  public fullName: string = "Alolan Rattata CES 84";
  public text: string = "Alolan Rattata";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
