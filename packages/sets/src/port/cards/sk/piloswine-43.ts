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

export class Piloswine_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swinub";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Impaling Tusk", cost: [], damage: "40", text: "" },
      { name: "Continuous Charge", cost: [], damage: "30+", text: "Flip 4 coins. This attack does 30 damage plus 20 more damage for each heads. Put a damage counter on Piloswine for each heads." }
  ];
  public set: string = "SK";
  public name: string = "Piloswine";
  public fullName: string = "Piloswine SK 43";
  public text: string = "Piloswine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
