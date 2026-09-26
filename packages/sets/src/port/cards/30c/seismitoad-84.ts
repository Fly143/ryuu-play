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

export class Seismitoad_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Palpitoad";
  public hp: number = 160;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quaking Fist", cost: [], damage: "60", text: "During your opponent's next turn, whenever they try to use a Trainer card from their hand, they flip a coin. If tails, your opponent discards that Trainer card instead of using it." },
      { name: "Mega Punch", cost: [], damage: "180", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Seismitoad";
  public fullName: string = "Seismitoad 30C 84";
  public text: string = "Seismitoad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
