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

export class TeamRocketSAmpharos_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Flaaffy";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkest Impulse", powerType: PowerType.ABILITY, text: "Whenever your opponent plays a Pokémon from their hand to evolve 1 of their Pokémon, put 4 damage counters on that Pokémon. The effect of Darkest Impulse doesn't stack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Head Bolt", cost: [], damage: "140", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Ampharos";
  public fullName: string = "Team Rocket's Ampharos DRI 74";
  public text: string = "Team Rocket's Ampharos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
