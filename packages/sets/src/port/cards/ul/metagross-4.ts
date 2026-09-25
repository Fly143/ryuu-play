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

export class Metagross_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Float", powerType: PowerType.ABILITY, text: "If you have any Psychic Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pulse Blast", cost: [], damage: "60", text: "" },
      { name: "Double Leg Hammer", cost: [], damage: "", text: "Choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "UL";
  public name: string = "Metagross";
  public fullName: string = "Metagross UL 4";
  public text: string = "Metagross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
