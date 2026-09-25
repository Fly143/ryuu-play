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

export class Greninja_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frogadier";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evasion Jutsu", powerType: PowerType.ABILITY, text: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Furious Shurikens", cost: [], damage: "", text: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DET";
  public name: string = "Greninja";
  public fullName: string = "Greninja DET 9";
  public text: string = "Greninja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
