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

export class TeamRocketSPorygon2_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Porygon";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "R Command", cost: [], damage: "20×", text: "This attack does 20 damage for each Supporter card that has \"Team Rocket\" in its name in your discard pile." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Porygon2";
  public fullName: string = "Team Rocket's Porygon2 DRI 154";
  public text: string = "Team Rocket's Porygon2";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
