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

export class Dragonair_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dratini";
  public hp: number = 90;
    public height?: number = 4.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon's Wish", cost: [], damage: "", text: "During your next turn, you may attach any number of Energy cards from your hand to your Pokémon." },
      { name: "Tail Smack", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SUM";
  public name: string = "Dragonair";
  public fullName: string = "Dragonair SUM 95";
  public text: string = "Dragonair";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
