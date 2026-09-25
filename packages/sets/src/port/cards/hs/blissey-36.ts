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

export class Blissey_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Link", cost: [], damage: "10", text: "Search your discard pile for an Energy card and attach it to Blissey." },
      { name: "Double-edge", cost: [], damage: "80", text: "Blissey does 40 damage to itself." }
  ];
  public set: string = "HS";
  public name: string = "Blissey";
  public fullName: string = "Blissey HS 36";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
