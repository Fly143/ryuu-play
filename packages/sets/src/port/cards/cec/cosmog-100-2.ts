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

export class Cosmog_1002 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Unaware", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Surprise Attack", cost: [], damage: "10", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "CEC";
  public name: string = "Cosmog";
  public fullName: string = "Cosmog CEC 100 (2)";
  public text: string = "Cosmog";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    return state;
  }
}
