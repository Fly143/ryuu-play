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

export class Minun_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ditch and Draw", cost: [], damage: "", text: "You may discard any number of cards from your hand. Then, draw cards until you have 5 cards in your hand." },
      { name: "Electro Ball", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CES";
  public name: string = "Minun";
  public fullName: string = "Minun CES 54";
  public text: string = "Minun";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* drawUntilHand:5 */ state;
    }
    return state;
  }
}
