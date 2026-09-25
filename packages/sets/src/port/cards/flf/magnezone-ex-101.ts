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

export class MagnezoneEX_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electro Ball", cost: [], damage: "40", text: "" },
      { name: "Dual Bullet", cost: [], damage: "", text: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)" }
  ];
  public set: string = "FLF";
  public name: string = "Magnezone-EX";
  public fullName: string = "Magnezone-EX FLF 101";
  public text: string = "Magnezone-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
