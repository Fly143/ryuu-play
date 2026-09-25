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

export class ErikaSVenusaur_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Ivysaur";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growth", cost: [], damage: "", text: "Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Erika's Venusaur." },
      { name: "Wide Solarbeam", cost: [], damage: "20", text: "If your opponent has any Benched Pokémon, choose 2 of them (or 1 if he or she only has 1). This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G2";
  public name: string = "Erika's Venusaur";
  public fullName: string = "Erika's Venusaur G2 4";
  public text: string = "Erika's Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
