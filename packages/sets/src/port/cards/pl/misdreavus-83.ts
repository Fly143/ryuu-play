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

export class Misdreavus_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Take Back", cost: [], damage: "", text: "Flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand." },
      { name: "Tackle", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PL";
  public name: string = "Misdreavus";
  public fullName: string = "Misdreavus PL 83";
  public text: string = "Misdreavus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
