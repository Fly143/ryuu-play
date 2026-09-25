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

export class Miltank_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bellyful of Milk", cost: [], damage: "", text: "Flip 2 coins. If both of them are heads, heal all damage from 1 of your Pokémon." },
      { name: "Tackle", cost: [], damage: "60", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Miltank";
  public fullName: string = "Miltank MEG 106";
  public text: string = "Miltank";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
