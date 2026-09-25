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

export class Gorebyss_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crescendo Wave", cost: [], damage: "30×", text: "This attack does 30 damage for each Water Energy attached to this Pokémon. Before doing damage, you may attach any number of Basic Water Energy cards from your hand to this Pokémon." }
  ];
  public set: string = "DRI";
  public name: string = "Gorebyss";
  public fullName: string = "Gorebyss DRI 56";
  public text: string = "Gorebyss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
