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

export class HisuianLilligant_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Petilil";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swelling Scent", cost: [], damage: "", text: "Search your deck for up to 2 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Spiral Kick", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Hisuian Lilligant";
  public fullName: string = "Hisuian Lilligant PGO 10";
  public text: string = "Hisuian Lilligant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
