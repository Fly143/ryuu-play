import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Togetic_392 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togepi";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chase Up", cost: [], damage: "", text: "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward." },
      { name: "Fly", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage done to Togetic during your opponent's next turn." }
  ];
  public set: string = "UD";
  public name: string = "Togetic";
  public fullName: string = "Togetic UD 39";
  public text: string = "Togetic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
