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

export class Persian_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meowth";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Screech", cost: [], damage: "", text: "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance)." },
      { name: "Slash", cost: [], damage: "40", text: "" }
  ];
  public set: string = "BUS";
  public name: string = "Persian";
  public fullName: string = "Persian BUS 102";
  public text: string = "Persian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
