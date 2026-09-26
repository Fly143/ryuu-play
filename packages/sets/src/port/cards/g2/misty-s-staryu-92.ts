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

export class MistySStaryu_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Star Boomerang", cost: [], damage: "20", text: "Flip a coin. If heads, return Misty's Staryu and all cards attached to it to your hand. (Either way, this attack does its damage.)" }
  ];
  public set: string = "G2";
  public name: string = "Misty's Staryu";
  public fullName: string = "Misty's Staryu G2 92";
  public text: string = "Misty's Staryu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
