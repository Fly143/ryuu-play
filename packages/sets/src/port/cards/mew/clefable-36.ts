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

export class Clefable_362 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Follow Me", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot." },
      { name: "More Moon", cost: [], damage: "50", text: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card." }
  ];
  public set: string = "MEW";
  public name: string = "Clefable";
  public fullName: string = "Clefable MEW 36";
  public text: string = "Clefable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
