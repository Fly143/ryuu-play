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

export class Crobat_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golbat";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Echoing Madness", cost: [], damage: "50", text: "Choose Item cards or Supporter cards. During your opponent's next turn, they can't play any of the chosen cards from their hand." },
      { name: "Cutting Wind", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Crobat";
  public fullName: string = "Crobat PAR 112";
  public text: string = "Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
