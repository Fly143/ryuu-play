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

export class Exeggutor_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 80;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Exchange", cost: [], damage: "", text: "Shuffle your hand into your deck. Draw up to 8 cards." },
      { name: "Big Eggsplosion", cost: [], damage: "40×", text: "Flip a coin for each Energy attached to Exeggutor. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "RG";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor RG 5";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
