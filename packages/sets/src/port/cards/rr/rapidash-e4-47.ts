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

export class RapidashE4_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pickup Power", cost: [], damage: "", text: "Flip 3 coins. For each heads, search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand." },
      { name: "Fire Mane", cost: [], damage: "20", text: "" }
  ];
  public set: string = "RR";
  public name: string = "Rapidash E4";
  public fullName: string = "Rapidash E4 RR 47";
  public text: string = "Rapidash E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
