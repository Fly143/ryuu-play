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

export class Golduck_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 90;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swim", cost: [], damage: "30", text: "If your opponent has any Water Energy attached to any of his or her Pokémon, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Water Slide", cost: [], damage: "40+", text: "You may move all Energy cards attached to Golduck to 1 of your Benched Pokémon. If you do, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Golduck";
  public fullName: string = "Golduck PL 29";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
