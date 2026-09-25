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

export class HoOh_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sacred Wing", cost: [], damage: "60", text: "Flip a coin. If tails, this attack's base damage is 20 instead of 60." }
  ];
  public set: string = "BP";
  public name: string = "Ho-oh";
  public fullName: string = "Ho-oh BP 52";
  public text: string = "Ho-oh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* flipTailsBaseDamage:20 */ state;
    }
    return state;
  }
}
