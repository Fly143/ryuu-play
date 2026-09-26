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

export class TeamRocketSHoundour_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Steady Firebreathing", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Houndour";
  public fullName: string = "Team Rocket's Houndour DRI 37";
  public text: string = "Team Rocket's Houndour";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
