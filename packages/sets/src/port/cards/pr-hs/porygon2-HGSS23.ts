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

export class Porygon2HGSS23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shortcut", powerType: PowerType.ABILITY, text: "The Retreat Cost for each Porygon, Porygon2, and Porygon-Z you have in play is Colorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Reckless Charge", cost: [], damage: "50", text: "Porygon2 does 10 damage to itself." }
  ];
  public set: string = "PR-HS";
  public name: string = "Porygon2";
  public fullName: string = "Porygon2 PR-HS HGSS23";
  public text: string = "Porygon2";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
