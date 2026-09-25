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

export class Scraggy_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nitpick", cost: [], damage: "", text: "Your opponent shuffles their hand into their deck and draws 4 cards." },
      { name: "Corkscrew Punch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Scraggy";
  public fullName: string = "Scraggy 30C 140";
  public text: string = "Scraggy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* opponentShuffleDraw:4 */ state;
    }
    return state;
  }
}
