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

export class Dusclops_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duskull";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Judgement", cost: [], damage: "", text: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out." },
      { name: "Random Curse", cost: [], damage: "", text: "Put a total of 5 damage counters on all Defending Pokémon in any way you like." }
  ];
  public set: string = "SS";
  public name: string = "Dusclops";
  public fullName: string = "Dusclops SS 4";
  public text: string = "Dusclops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
