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

export class UnownL_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "LINK", powerType: PowerType.ABILITY, text: "Unown L can use any attack from any Unown in play (both yours and your opponent's). (You still have to pay for that attack's Energy cost.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Search either player's discard pile for up to any 2 cards, show them to your opponent, and put them on top of that player's deck in any order you like." }
  ];
  public set: string = "GE";
  public name: string = "Unown [L]";
  public fullName: string = "Unown [L] GE 91";
  public text: string = "Unown [L]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
