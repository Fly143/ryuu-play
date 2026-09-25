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

export class Cacnea_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sneaky Attack", cost: [], damage: "10+", text: "If Cacnea has any Darkness Energy attached to it, this attack does 10 damage plus 10 more damage." },
      { name: "Shoot Needle", cost: [], damage: "", text: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can choose the same Pokémon more than once, but you can't do more than 10 damage to that Pokémon in this way.)" }
  ];
  public set: string = "PL";
  public name: string = "Cacnea";
  public fullName: string = "Cacnea PL 67";
  public text: string = "Cacnea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
