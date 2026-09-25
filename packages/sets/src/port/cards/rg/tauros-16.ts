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

export class Tauros_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knock Over", cost: [], damage: "10", text: "You may discard any Stadium card in play." },
      { name: "Rampage", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each damage counter on Tauros. After doing damage, flip a coin. If tails, Tauros is now Confused." }
  ];
  public set: string = "RG";
  public name: string = "Tauros";
  public fullName: string = "Tauros RG 16";
  public text: string = "Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* discardStadium */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* flipHeadsSelfSpecial:CONFUSED */ state;
    }
    return state;
  }
}
