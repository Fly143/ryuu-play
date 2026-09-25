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

export class UnownN_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Normal]", powerType: PowerType.ABILITY, text: "Whenever a Colorless Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown [N] in play. (This power works even if Unown [N] is Asleep, Confused, or Paralyzed.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N2";
  public name: string = "Unown [N]";
  public fullName: string = "Unown [N] N2 50";
  public text: string = "Unown [N]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
