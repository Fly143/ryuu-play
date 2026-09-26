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

export class FlareonVMAX_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flareon V";
  public hp: number = 320;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Max Detonate", cost: [], damage: "100×", text: "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way." }
  ];
  public set: string = "CRE";
  public name: string = "Flareon VMAX";
  public fullName: string = "Flareon VMAX CRE 18";
  public text: string = "Flareon VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 5);
    }
    return state;
  }
}
