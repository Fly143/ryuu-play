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
import { commonEffects } from '../../../common';

export class Rayquaza_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Outrage", cost: [], damage: "10+", text: "Flip a coin. If tails, this attack does nothing. If heads, this attack does 10 damage plus 10 more damage for each damage counter on Rayquaza." },
      { name: "Flamethrower", cost: [], damage: "40", text: "Discard a Fire Energy attached to Rayquaza." }
  ];
  public set: string = "HP";
  public name: string = "Rayquaza δ";
  public fullName: string = "Rayquaza δ HP 26";
  public text: string = "Rayquaza δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
