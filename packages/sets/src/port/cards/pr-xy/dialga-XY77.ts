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

export class DialgaXY77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Claw", cost: [], damage: "30", text: "" },
      { name: "Time Freeze", cost: [], damage: "80", text: "Your opponent can't play any Pokémon from his or her hand to evolve the Defending Pokémon during his or her next turn." }
  ];
  public set: string = "PR-XY";
  public name: string = "Dialga";
  public fullName: string = "Dialga PR-XY XY77";
  public text: string = "Dialga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
