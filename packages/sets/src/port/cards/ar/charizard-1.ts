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

export class Charizard_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fire Formation", powerType: PowerType.ABILITY, text: "Each of Charizard's attacks does 10 more damage for each Fire Pokémon on your Bench to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Wing", cost: [], damage: "30", text: "" },
      { name: "Burning Tail", cost: [], damage: "80", text: "Discard a Fire Energy attached to Charizard." }
  ];
  public set: string = "AR";
  public name: string = "Charizard";
  public fullName: string = "Charizard AR 1";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
