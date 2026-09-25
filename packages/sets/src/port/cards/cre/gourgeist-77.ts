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

export class Gourgeist_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pumpkaboo";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pandemonium", cost: [], damage: "60×", text: "Reveal the top 6 cards of your deck. This attack does 60 damage for each Psychic Pokémon you find there. Then, shuffle those Pokémon back into your deck and discard the other cards." }
  ];
  public set: string = "CRE";
  public name: string = "Gourgeist";
  public fullName: string = "Gourgeist CRE 77";
  public text: string = "Gourgeist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
