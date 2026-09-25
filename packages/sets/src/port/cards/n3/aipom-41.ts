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

export class Aipom_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grab", cost: [], damage: "", text: "Choose a Trainer card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck." },
      { name: "Tail Punch", cost: [], damage: "20", text: "" }
  ];
  public set: string = "N3";
  public name: string = "Aipom";
  public fullName: string = "Aipom N3 41";
  public text: string = "Aipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
