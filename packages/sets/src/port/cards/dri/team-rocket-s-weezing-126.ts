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

export class TeamRocketSWeezing_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Koffing";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Explode Together Now", cost: [], damage: "40×", text: "This attack does 40 damage for each Pokémon in play that has \"Koffing\" or \"Weezing\" in its name (both yours and your opponent's)." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Weezing";
  public fullName: string = "Team Rocket's Weezing DRI 126";
  public text: string = "Team Rocket's Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
