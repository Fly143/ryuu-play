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

export class Quagsire_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wooper";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Saturation", powerType: PowerType.ABILITY, text: "When you attach a Water Energy card from your hand to Quagsire, remove all Special Conditions and 2 damage counters from Quagsire.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hyper Pump", cost: [], damage: "20+", text: "Does 20 damage plus 20 more damage for each basic Energy card attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 60 damage in this way." }
  ];
  public set: string = "TRR";
  public name: string = "Quagsire";
  public fullName: string = "Quagsire TRR 26";
  public text: string = "Quagsire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
