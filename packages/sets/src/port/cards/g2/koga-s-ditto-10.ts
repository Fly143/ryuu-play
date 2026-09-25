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

export class KogaSDitto_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Giant Growth", cost: [], damage: "", text: "Flip a coin. If heads, Koga's Ditto's maximum HP is now 80 and Koga's Ditto's Pound attack's base damage is 30 instead of 10. (Benching Koga's Ditto ends this effect.)" },
      { name: "Pound", cost: [], damage: "10", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Koga's Ditto";
  public fullName: string = "Koga's Ditto G2 10";
  public text: string = "Koga's Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
