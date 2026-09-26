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

export class Magnemite_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Charge", cost: [], damage: "", text: "Attach up to 2 Basic Lightning Energy cards from your discard pile to 1 of your Benched Pokémon." },
      { name: "Speed Ball", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Magnemite";
  public fullName: string = "Magnemite PAL 65";
  public text: string = "Magnemite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
