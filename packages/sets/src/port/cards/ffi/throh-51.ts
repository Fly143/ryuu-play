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

export class Throh_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Freestyle Strike", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." },
      { name: "Shoulder Throw", cost: [], damage: "80-", text: "Does 80 damage minus 20 damage for each Colorless in the Defending Pokémon's Retreat Cost." }
  ];
  public set: string = "FFI";
  public name: string = "Throh";
  public fullName: string = "Throh FFI 51";
  public text: string = "Throh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "minusPerRetreatCostColorless:20");
    }
    return state;
  }
}
