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

export class BeedrillEx_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kakuna";
  public hp: number = 310;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rumbling Bees", cost: [], damage: "110×", text: "This attack does 110 damage for each of your Beedrill and Beedrill ex in play." }
  ];
  public set: string = "CRI";
  public name: string = "Beedrill ex";
  public fullName: string = "Beedrill ex CRI 3";
  public text: string = "Beedrill ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
