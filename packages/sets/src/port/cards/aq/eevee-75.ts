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

export class Eevee_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Charge Up", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward." },
      { name: "Lunge", cost: [], damage: "20", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "AQ";
  public name: string = "Eevee";
  public fullName: string = "Eevee AQ 75";
  public text: string = "Eevee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
