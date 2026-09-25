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

export class Blitzle_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Delivery Dash", cost: [], damage: "", text: "Search your deck for up to 2 Electropower cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Zap Kick", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Blitzle";
  public fullName: string = "Blitzle UNB 44";
  public text: string = "Blitzle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchAnyToHand:2 */ state;
    }
    return state;
  }
}
