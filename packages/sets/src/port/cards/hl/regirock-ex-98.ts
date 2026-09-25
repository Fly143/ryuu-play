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

export class RegirockEx_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Healing Stone", powerType: PowerType.ABILITY, text: "At any time between turns, remove 1 damage counter from Regirock ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tonnage", cost: [], damage: "60+", text: "You may do 60 damage plus 20 more damage. If you do, Regirock ex does 30 damage to itself." }
  ];
  public set: string = "HL";
  public name: string = "Regirock ex";
  public fullName: string = "Regirock ex HL 98";
  public text: string = "Regirock ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
