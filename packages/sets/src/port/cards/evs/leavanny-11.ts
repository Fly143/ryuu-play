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

export class Leavanny_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swadloon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Circle", cost: [], damage: "", text: "Heal all damage from each of your Benched Pokémon. If you healed any damage in this way, shuffle this Pokémon and all attached cards into your deck." },
      { name: "Razor Leaf", cost: [], damage: "120", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Leavanny";
  public fullName: string = "Leavanny EVS 11";
  public text: string = "Leavanny";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
