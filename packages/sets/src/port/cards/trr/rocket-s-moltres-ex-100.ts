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

export class RocketSMoltresEx_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Lift", powerType: PowerType.ABILITY, text: "If Rocket's Moltres ex has any Darkness Energy attached to it, the Retreat Cost for Rocket's Moltres ex is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Dance", cost: [], damage: "30", text: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon." },
      { name: "Combustion", cost: [], damage: "50", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Moltres ex";
  public fullName: string = "Rocket's Moltres ex TRR 100";
  public text: string = "Rocket's Moltres ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
