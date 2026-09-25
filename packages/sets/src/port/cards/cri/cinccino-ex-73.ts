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

export class CinccinoEx_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Minccino";
  public hp: number = 240;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Smooth Coat", powerType: PowerType.ABILITY, text: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energized Slap", cost: [], damage: "40×", text: "This attack does 40 damage for each Energy attached to this Pokémon." }
  ];
  public set: string = "CRI";
  public name: string = "Cinccino ex";
  public fullName: string = "Cinccino ex CRI 73";
  public text: string = "Cinccino ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
