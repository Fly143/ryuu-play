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

export class FarfetchD_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gust", cost: [], damage: "10", text: "" },
      { name: "Leek Jab", cost: [], damage: "40", text: "This attack can't be used during your next turn. (Benching Farfetch'd ends this effect.)" }
  ];
  public set: string = "N3";
  public name: string = "Farfetch'd";
  public fullName: string = "Farfetch'd N3 43";
  public text: string = "Farfetch'd";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
