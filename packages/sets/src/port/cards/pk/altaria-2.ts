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

export class Altaria_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Synergy Effect", powerType: PowerType.ABILITY, text: "If Drake's Stadium is in play, remove 1 damage counter from Altaria between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Surprise", cost: [], damage: "30", text: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck." },
      { name: "Gust", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PK";
  public name: string = "Altaria";
  public fullName: string = "Altaria PK 2";
  public text: string = "Altaria";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
