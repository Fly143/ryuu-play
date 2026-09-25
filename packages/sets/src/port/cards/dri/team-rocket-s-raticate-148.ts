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

export class TeamRocketSRaticate_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Rattata";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reckless Abandon", cost: [], damage: "90", text: "Flip 2 coins. If both of them are tails, this Pokémon also does 90 damage to itself." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Raticate";
  public fullName: string = "Team Rocket's Raticate DRI 148";
  public text: string = "Team Rocket's Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
