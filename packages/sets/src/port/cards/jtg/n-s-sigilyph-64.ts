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

export class NSSigilyph_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Sphere", cost: [], damage: "20", text: "" },
      { name: "Victory Symbol", cost: [], damage: "", text: "If you use this attack when you have exactly 1 Prize card remaining, you win this game." }
  ];
  public set: string = "JTG";
  public name: string = "N's Sigilyph";
  public fullName: string = "N's Sigilyph JTG 64";
  public text: string = "N's Sigilyph";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
