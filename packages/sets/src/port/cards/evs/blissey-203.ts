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

export class Blissey_203 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Expert in Roundness", powerType: PowerType.ABILITY, text: "Prevent all damage done to each of your Pokémon that has the Let's All Rollout attack by attacks from your opponent's Pokémon VMAX.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Let's All Rollout", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack." }
  ];
  public set: string = "EVS";
  public name: string = "Blissey";
  public fullName: string = "Blissey EVS 203";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
