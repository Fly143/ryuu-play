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

export class TeamRocketSGrimer_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Corrosive Sludge", cost: [], damage: "", text: "At the end of your opponent's next turn, discard the Defending Pokémon and all attached cards." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Grimer";
  public fullName: string = "Team Rocket's Grimer DRI 123";
  public text: string = "Team Rocket's Grimer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
