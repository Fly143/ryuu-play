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

export class TapuFiniSM203 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Razor Fin", cost: [], damage: "20", text: "" },
      { name: "Nature Wave", cost: [], damage: "100", text: "If your opponent has any Ultra Beasts in play, this attack can be used for Colorless." }
  ];
  public set: string = "PR-SM";
  public name: string = "Tapu Fini";
  public fullName: string = "Tapu Fini PR-SM SM203";
  public text: string = "Tapu Fini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
