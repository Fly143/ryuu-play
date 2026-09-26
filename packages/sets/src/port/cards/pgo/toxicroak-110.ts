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

export class Toxicroak_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croagunk";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pierce", cost: [], damage: "30", text: "" },
      { name: "Diving Uppercut", cost: [], damage: "120", text: "During your opponent's next turn, this Pokémon takes 50 more damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "PGO";
  public name: string = "Toxicroak";
  public fullName: string = "Toxicroak PGO 110";
  public text: string = "Toxicroak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
