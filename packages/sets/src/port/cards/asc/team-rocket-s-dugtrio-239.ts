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

export class TeamRocketSDugtrio_239 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Diglett";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Holes", powerType: PowerType.ABILITY, text: "Whenever your opponent's Active Pokémon moves to the Bench during their turn, place 2 damage counters on that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mud Shot", cost: [], damage: "50", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Team Rocket's Dugtrio";
  public fullName: string = "Team Rocket's Dugtrio ASC 239";
  public text: string = "Team Rocket's Dugtrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
