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

export class CresseliaDP51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lunar Aura", powerType: PowerType.ABILITY, text: "If you have Darkrai in play, remove 1 damage counter from Cresselia between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lunar Flight", cost: [], damage: "80-", text: "Does 80 damage minus 10 damage for each damage counter on Cresselia." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Cresselia";
  public fullName: string = "Cresselia PR-DPP DP51";
  public text: string = "Cresselia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
