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

export class Plusle_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Draw for Everybody", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent's)." },
      { name: "Electro Ball", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CES";
  public name: string = "Plusle";
  public fullName: string = "Plusle CES 53";
  public text: string = "Plusle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
