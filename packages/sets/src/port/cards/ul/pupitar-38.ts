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

export class Pupitar_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larvitar";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Boost Gas", powerType: PowerType.ABILITY, text: "If Pupitar has any Energy attached to it, the Retreat Cost of Pupitar is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rage", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each damage counter on Pupitar." }
  ];
  public set: string = "UL";
  public name: string = "Pupitar";
  public fullName: string = "Pupitar UL 38";
  public text: string = "Pupitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
