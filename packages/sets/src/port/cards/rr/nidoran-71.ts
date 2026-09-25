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

export class Nidoran_712 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "10", text: "" },
      { name: "Offer Help", cost: [], damage: "", text: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "RR";
  public name: string = "Nidoran ♀";
  public fullName: string = "Nidoran ♀ RR 71";
  public text: string = "Nidoran ♀";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
