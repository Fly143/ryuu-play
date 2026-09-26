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

export class Tyranitar_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 140;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Payback", cost: [], damage: "40+", text: "If your opponent has only 1 Prize card left, this attack does 40 damage plus 40 more damage and discard the top 3 cards from your opponent's deck." },
      { name: "Ground Burn", cost: [], damage: "80+", text: "Each player discards the top card of his or her deck. This attack does 80 damage plus 20 more damage for each Energy card discarded in this way." }
  ];
  public set: string = "MT";
  public name: string = "Tyranitar";
  public fullName: string = "Tyranitar MT 17";
  public text: string = "Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
