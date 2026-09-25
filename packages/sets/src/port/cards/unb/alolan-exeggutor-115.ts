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

export class AlolanExeggutor_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Paradise Draw", cost: [], damage: "", text: "You may discard any number of cards from your hand. Then, draw cards until you have 6 cards in your hand." },
      { name: "Egg Splat", cost: [], damage: "60×", text: "Discard any number of Exeggcute from your hand. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "UNB";
  public name: string = "Alolan Exeggutor";
  public fullName: string = "Alolan Exeggutor UNB 115";
  public text: string = "Alolan Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* drawUntilHand:6 */ state;
    }
    return state;
  }
}
