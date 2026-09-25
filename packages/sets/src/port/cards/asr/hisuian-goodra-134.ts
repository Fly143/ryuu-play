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

export class HisuianGoodra_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hisuian Sliggoo";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Lodging", powerType: PowerType.ABILITY, text: "Prevent all damage done to each of your Basic Pokémon that has any Metal Energy attached by attacks from your opponent's Pokémon V.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heavy Impact", cost: [], damage: "140", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Hisuian Goodra";
  public fullName: string = "Hisuian Goodra ASR 134";
  public text: string = "Hisuian Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
