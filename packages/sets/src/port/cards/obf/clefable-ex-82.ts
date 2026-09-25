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

export class ClefableEx_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lunar Zone", powerType: PowerType.ABILITY, text: "All of your Pokémon that have Psychic Energy attached have no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wondrous Moon", cost: [], damage: "170", text: "You may move any amount of Psychic Energy from your Pokémon to your other Pokémon in any way you like." }
  ];
  public set: string = "OBF";
  public name: string = "Clefable ex";
  public fullName: string = "Clefable ex OBF 82";
  public text: string = "Clefable ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
