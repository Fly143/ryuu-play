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

export class Gumshoos_181 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yungoos";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Alert Headbutt", cost: [], damage: "90", text: "If your opponent's Active Pokémon is a Pokémon-GX or Pokémon-EX, this attack's base damage is 30." }
  ];
  public set: string = "CEC";
  public name: string = "Gumshoos";
  public fullName: string = "Gumshoos CEC 181";
  public text: string = "Gumshoos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
