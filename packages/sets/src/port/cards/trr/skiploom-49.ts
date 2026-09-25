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

export class Skiploom_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hoppip";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Buffer", powerType: PowerType.ABILITY, text: "If Skiploom would be Knocked Out by an opponent's attack, flip a coin. If heads, Skiploom is not Knocked Out and its remaining HP becomes 10 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Miracle Powder", cost: [], damage: "10", text: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition." }
  ];
  public set: string = "TRR";
  public name: string = "Skiploom";
  public fullName: string = "Skiploom TRR 49";
  public text: string = "Skiploom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
