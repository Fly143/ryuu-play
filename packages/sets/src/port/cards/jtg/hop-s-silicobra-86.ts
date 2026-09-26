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

export class HopSSilicobra_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 2.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turf Maker", cost: [], damage: "", text: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Gnaw", cost: [], damage: "20", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Hop's Silicobra";
  public fullName: string = "Hop's Silicobra JTG 86";
  public text: string = "Hop's Silicobra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
