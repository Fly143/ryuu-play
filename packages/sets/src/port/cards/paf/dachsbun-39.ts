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

export class Dachsbun_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fidough";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Well-Baked Body", powerType: PowerType.ABILITY, text: "This Pokémon can't be Burned. Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Headbutt Bounce", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Dachsbun";
  public fullName: string = "Dachsbun PAF 39";
  public text: string = "Dachsbun";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
