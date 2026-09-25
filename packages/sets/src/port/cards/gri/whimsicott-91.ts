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

export class Whimsicott_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cottonee";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "The Wages of Fluff", cost: [], damage: "", text: "If the Defending Pokémon is Knocked Out during your next turn, take 2 more Prize cards." },
      { name: "Fairy Wind", cost: [], damage: "30", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Whimsicott";
  public fullName: string = "Whimsicott GRI 91";
  public text: string = "Whimsicott";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
