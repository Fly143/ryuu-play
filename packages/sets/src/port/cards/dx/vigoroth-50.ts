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

export class Vigoroth_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slakoth";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vigorous Aura", powerType: PowerType.ABILITY, text: "As long as Vigoroth is your Active Pokémon, attacks by each player's Active Pokémon (both if there are 2) do 10 more damage to any Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DX";
  public name: string = "Vigoroth";
  public fullName: string = "Vigoroth DX 50";
  public text: string = "Vigoroth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
