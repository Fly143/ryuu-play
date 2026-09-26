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

export class JangmoO_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Screech", cost: [], damage: "", text: "During your next turn, the Defending Pokémon takes 30 more damage from attacks (after applying Weakness and Resistance)." },
      { name: "Dragon Claw", cost: [], damage: "40", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Jangmo-o";
  public fullName: string = "Jangmo-o 30C 110";
  public text: string = "Jangmo-o";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
