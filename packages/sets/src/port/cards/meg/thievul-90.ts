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

export class Thievul_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nickit";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Greedy Hunt", cost: [], damage: "20", text: "You may draw cards until you have 6 cards in your hand." },
      { name: "Pitch-Black Fangs", cost: [], damage: "60", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Thievul";
  public fullName: string = "Thievul MEG 90";
  public text: string = "Thievul";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* drawUntilHand:6 */ state;
    }
    return state;
  }
}
