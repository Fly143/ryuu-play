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

export class LightSlowbro_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fish Out", cost: [], damage: "", text: "Your opponent may choose up to 3 Baby Pokémon, Basic Pokémon, and/or Evolution cards from his or her discard pile and shuffle them into his or her deck. Either way, you may do the same." },
      { name: "Splash About", cost: [], damage: "20+", text: "If there are more Energy attached to the Defending Pokémon than to Light Slowbro, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage." }
  ];
  public set: string = "N4";
  public name: string = "Light Slowbro";
  public fullName: string = "Light Slowbro N4 51";
  public text: string = "Light Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
