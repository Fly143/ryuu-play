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

export class Kricketune_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kricketot";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Screech", cost: [], damage: "", text: "During your next turn, any damage done to the Defending Pokémon by attacks is increased by 60 (after applying Weakness and Resistance)." },
      { name: "Slash", cost: [], damage: "40", text: "" }
  ];
  public set: string = "GEN";
  public name: string = "Kricketune";
  public fullName: string = "Kricketune GEN 6";
  public text: string = "Kricketune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
