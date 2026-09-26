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

export class Dartrix_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rowlet";
  public hp: number = 90;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "United Wings", cost: [], damage: "20×", text: "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack." },
      { name: "Cutting Wind", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SFA";
  public name: string = "Dartrix";
  public fullName: string = "Dartrix SFA 4";
  public text: string = "Dartrix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
