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

export class Exeggutor_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 90;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Search your discard pile for up to 2 Energy cards and attach them to Exeggutor." },
      { name: "Big Eggsplosion", cost: [], damage: "40×", text: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "HS";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor HS 18";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
