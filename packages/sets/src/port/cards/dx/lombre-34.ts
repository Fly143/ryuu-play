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

export class Lombre_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lotad";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Cure", powerType: PowerType.ABILITY, text: "When you attach a Water Energy card from your hand to Lombre, remove all Special Conditions from Lombre.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blot", cost: [], damage: "20", text: "Remove 2 damage counters from Lombre." }
  ];
  public set: string = "DX";
  public name: string = "Lombre";
  public fullName: string = "Lombre DX 34";
  public text: string = "Lombre";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
