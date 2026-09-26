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

export class Slowpoke_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "All-You-Can-Yeet", cost: [], damage: "", text: "You may discard any number of cards from your hand." },
      { name: "Headbutt", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PBL";
  public name: string = "Slowpoke";
  public fullName: string = "Slowpoke PBL 29";
  public text: string = "Slowpoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
