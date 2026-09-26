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

export class Dialga_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 5.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chrono Wind", cost: [], damage: "80", text: "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn." },
      { name: "Heavy Impact", cost: [], damage: "210", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Dialga";
  public fullName: string = "Dialga CRE 112";
  public text: string = "Dialga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
