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

export class Klinklang_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Klang";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Blast", cost: [], damage: "20+", text: "Does 20 more damage for each Metal Energy attached to this Pokémon." },
      { name: "Lock Gear", cost: [], damage: "60", text: "Draw cards until you have 6 cards in your hand." }
  ];
  public set: string = "DRX";
  public name: string = "Klinklang";
  public fullName: string = "Klinklang DRX 77";
  public text: string = "Klinklang";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* drawUntilHand:6 */ state;
    }
    return state;
  }
}
