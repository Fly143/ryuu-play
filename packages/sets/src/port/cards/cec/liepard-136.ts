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

export class Liepard_136 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Purrloin";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "40", text: "" },
      { name: "Shadow Scratch", cost: [], damage: "90", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." }
  ];
  public set: string = "CEC";
  public name: string = "Liepard";
  public fullName: string = "Liepard CEC 136";
  public text: string = "Liepard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
