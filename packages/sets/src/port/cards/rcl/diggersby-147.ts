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

export class Diggersby_147 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bunnelby";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mining Rush", cost: [], damage: "30×", text: "Discard up to 6 cards from the top of your deck. If you do, this attack does 30 damage for each card you discarded in this way." },
      { name: "Headbutt Bounce", cost: [], damage: "110", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Diggersby";
  public fullName: string = "Diggersby RCL 147";
  public text: string = "Diggersby";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
