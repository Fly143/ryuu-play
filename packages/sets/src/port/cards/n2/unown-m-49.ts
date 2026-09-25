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

export class UnownM_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Metal]", powerType: PowerType.ABILITY, text: "Whenever a Metal Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown [M] in play. (This power works even if Unown [M] is Asleep, Confused, or Paralyzed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N2";
  public name: string = "Unown [M]";
  public fullName: string = "Unown [M] N2 49";
  public text: string = "Unown [M]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
