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

export class Buneary_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charm", cost: [], damage: "", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance)." },
      { name: "Skip", cost: [], damage: "10", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Buneary";
  public fullName: string = "Buneary MEG 107";
  public text: string = "Buneary";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
