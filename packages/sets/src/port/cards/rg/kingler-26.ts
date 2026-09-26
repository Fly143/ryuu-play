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

export class Kingler_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krabby";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Salt Water", cost: [], damage: "", text: "Search your deck for up to 2 Water Energy cards and attach them to Kingler. Shuffle your deck afterward." },
      { name: "Hyper Pump", cost: [], damage: "30+", text: "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way." }
  ];
  public set: string = "RG";
  public name: string = "Kingler";
  public fullName: string = "Kingler RG 26";
  public text: string = "Kingler";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
