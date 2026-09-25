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

export class Purugly_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glameow";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Caturday", cost: [], damage: "", text: "Draw 3 cards. If you do, this Pokémon is now Asleep." },
      { name: "Claw Slash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Purugly";
  public fullName: string = "Purugly SHF 116";
  public text: string = "Purugly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
