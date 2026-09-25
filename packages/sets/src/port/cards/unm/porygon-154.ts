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

export class Porygon_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Digicharge", cost: [], damage: "", text: "Flip 3 coins. For each heads, search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Sharp Point", cost: [], damage: "10", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Porygon";
  public fullName: string = "Porygon UNM 154";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
