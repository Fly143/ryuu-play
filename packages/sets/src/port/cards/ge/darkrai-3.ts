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

export class Darkrai_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reach Over", cost: [], damage: "", text: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Darkness Pursuit", cost: [], damage: "50", text: "If the Defending Pokémon is Cresselia, this attack's base damage is 100." }
  ];
  public set: string = "GE";
  public name: string = "Darkrai";
  public fullName: string = "Darkrai GE 3";
  public text: string = "Darkrai";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
