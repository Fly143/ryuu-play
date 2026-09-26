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

export class Grimer_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sticky Liquid", cost: [], damage: "", text: "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless more." },
      { name: "Sludge Toss", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UD";
  public name: string = "Grimer";
  public fullName: string = "Grimer UD 50";
  public text: string = "Grimer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
