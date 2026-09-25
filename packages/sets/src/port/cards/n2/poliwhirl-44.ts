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

export class Poliwhirl_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwag";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Belly Drum", cost: [], damage: "", text: "Put 3 damage counters on Poliwhirl. If this doesn't Knock Out Poliwhirl, search your deck for 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward." },
      { name: "Water Gun", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way." }
  ];
  public set: string = "N2";
  public name: string = "Poliwhirl";
  public fullName: string = "Poliwhirl N2 44";
  public text: string = "Poliwhirl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
