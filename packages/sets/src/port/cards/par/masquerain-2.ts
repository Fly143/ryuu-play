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

export class Masquerain_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Surskit";
  public hp: number = 100;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Daunting Eyes", cost: [], damage: "", text: "Flip a coin until you get tails. For each heads, shuffle an Energy attached to your opponent's Active Pokémon into their deck." },
      { name: "Cutting Wind", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Masquerain";
  public fullName: string = "Masquerain PAR 2";
  public text: string = "Masquerain";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
