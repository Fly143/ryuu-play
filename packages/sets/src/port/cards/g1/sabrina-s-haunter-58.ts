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

export class SabrinaSHaunter_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Gastly";
  public hp: number = 50;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Night Spirits", cost: [], damage: "30×", text: "Flip a number of coins equal to the total number of Sabrina's Gastlys, Sabrina's Haunters, and Sabrina's Gengars you have in play. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "G1";
  public name: string = "Sabrina's Haunter";
  public fullName: string = "Sabrina's Haunter G1 58";
  public text: string = "Sabrina's Haunter";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
