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

export class DarkOmanyte_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Cannon", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Water Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way." }
  ];
  public set: string = "N4";
  public name: string = "Dark Omanyte";
  public fullName: string = "Dark Omanyte N4 37";
  public text: string = "Dark Omanyte";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
