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

export class Spidops_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tarountula";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Entangling Trap", cost: [], damage: "", text: "Shuffle each player's Active Pokémon and all attached cards into their deck. (You choose a new Active Pokémon first.)" },
      { name: "Hammer In", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Spidops";
  public fullName: string = "Spidops PAL 18";
  public text: string = "Spidops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
