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

export class Eelektrik_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tynamo";
  public hp: number = 90;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shocking Smash", cost: [], damage: "", text: "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon." },
      { name: "Head Bolt", cost: [], damage: "60", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Eelektrik";
  public fullName: string = "Eelektrik VIV 58";
  public text: string = "Eelektrik";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
