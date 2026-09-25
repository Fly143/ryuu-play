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

export class Camerupt_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Numel";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eruption", cost: [], damage: "50+", text: "Discard the top card of each player's deck. This attack does 100 more damage for each Energy card discarded in this way." },
      { name: "Steaming Stomp", cost: [], damage: "120", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Camerupt";
  public fullName: string = "Camerupt OBF 32";
  public text: string = "Camerupt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 0);
    }
    return state;
  }
}
