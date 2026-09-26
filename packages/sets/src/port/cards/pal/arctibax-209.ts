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

export class Arctibax_209 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frigibax";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sharp Fin", cost: [], damage: "40", text: "" },
      { name: "Frost Smash", cost: [], damage: "80", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Arctibax";
  public fullName: string = "Arctibax PAL 209";
  public text: string = "Arctibax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
