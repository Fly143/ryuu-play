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

export class Furret_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sentret";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Change", cost: [], damage: "", text: "Choose up to 3 cards in your hand and put them on top of your deck. Then, search your deck for that many cards and put them into your hand. Shuffle your deck afterward." },
      { name: "Quick Tail Smash", cost: [], damage: "30", text: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage instead. If tails, this attack does nothing." }
  ];
  public set: string = "TRR";
  public name: string = "Furret";
  public fullName: string = "Furret TRR 22";
  public text: string = "Furret";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
