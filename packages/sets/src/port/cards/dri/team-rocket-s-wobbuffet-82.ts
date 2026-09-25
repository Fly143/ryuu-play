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

export class TeamRocketSWobbuffet_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rocket Mirror", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Team Rocket's Pokémon to your opponent's Active Pokémon." },
      { name: "Headbutt Bounce", cost: [], damage: "70", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Wobbuffet";
  public fullName: string = "Team Rocket's Wobbuffet DRI 82";
  public text: string = "Team Rocket's Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
