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

export class Politoed_252 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 130;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roll Call", cost: [], damage: "", text: "Search your deck for a Poliwag, a Poliwhirl, and a Poliwrath, and put them onto your Bench. Then, shuffle your deck." },
      { name: "Hyper Jump", cost: [], damage: "100", text: "You may shuffle this Pokémon and all cards attached to it into your deck." }
  ];
  public set: string = "GRI";
  public name: string = "Politoed";
  public fullName: string = "Politoed GRI 25";
  public text: string = "Politoed";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
