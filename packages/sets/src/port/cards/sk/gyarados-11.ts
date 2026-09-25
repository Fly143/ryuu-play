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

export class Gyarados_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flame Vapor", powerType: PowerType.ABILITY, text: "When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon's Vengeance", cost: [], damage: "50", text: "If Gyarados has 7 or more damage counters on it, this attack's base damage is 100." }
  ];
  public set: string = "SK";
  public name: string = "Gyarados";
  public fullName: string = "Gyarados SK 11";
  public text: string = "Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
