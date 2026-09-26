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

export class TeamRocketSHonchkrow_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Murkrow";
  public hp: number = 130;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rocket Feathers", cost: [], damage: "60×", text: "You may discard any number of Supporter cards that have \"Team Rocket\" in their name from your hand, and this attack does 60 damage for each card you discarded in this way." },
      { name: "Hammer In", cost: [], damage: "100", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Team Rocket's Honchkrow";
  public fullName: string = "Team Rocket's Honchkrow ASC 127";
  public text: string = "Team Rocket's Honchkrow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
