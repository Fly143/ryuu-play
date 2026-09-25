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

export class Drilbur_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rototiller", cost: [], damage: "", text: "Shuffle a card from your discard pile into your deck." },
      { name: "Mud-Slap", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Drilbur";
  public fullName: string = "Drilbur CEC 114";
  public text: string = "Drilbur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
