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

export class Gyarados_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dragon DNA", powerType: PowerType.ABILITY, text: "Gyarados can use any attack from its Basic Pokémon. (You still have to pay for that attack's Energy cost.) If Gyarados uses any attack from its Basic Pokémon, that attack does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Enrage", cost: [], damage: "80", text: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it. If the first coin is tails, Gyarados is now Confused." }
  ];
  public set: string = "MT";
  public name: string = "Gyarados";
  public fullName: string = "Gyarados MT 26";
  public text: string = "Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
