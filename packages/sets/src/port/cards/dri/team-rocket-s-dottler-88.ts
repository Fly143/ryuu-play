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

export class TeamRocketSDottler_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Blipbug";
  public hp: number = 80;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Disruptive Radar", cost: [], damage: "", text: "Look at the top 5 cards of your opponent's deck and put them back in any order." },
      { name: "Super Psy Bolt", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Dottler";
  public fullName: string = "Team Rocket's Dottler DRI 88";
  public text: string = "Team Rocket's Dottler";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
