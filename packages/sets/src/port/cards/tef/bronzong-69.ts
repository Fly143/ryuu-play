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

export class Bronzong_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bronzor";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evolution Jammer", cost: [], damage: "30", text: "During your opponent's next turn, they can't play any Pokémon from their hand to evolve their Pokémon." },
      { name: "Super Psy Bolt", cost: [], damage: "100", text: "" }
  ];
  public set: string = "TEF";
  public name: string = "Bronzong";
  public fullName: string = "Bronzong TEF 69";
  public text: string = "Bronzong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
