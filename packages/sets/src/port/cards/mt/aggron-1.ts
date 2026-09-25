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

export class Aggron_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lairon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heap Up", cost: [], damage: "40+", text: "Search your discard pile for all Energy cards and show them to your opponent. If you find any Metal Special Energy cards there this attack does 40 damage plus 30 more damage. Put all of those Energy cards on top of your deck. Shuffle your deck afterward." },
      { name: "Hard Metal", cost: [], damage: "60+", text: "You may do 60 damage plus 40 more damage. If you do, Aggron does 40 damage to itself." }
  ];
  public set: string = "MT";
  public name: string = "Aggron";
  public fullName: string = "Aggron MT 1";
  public text: string = "Aggron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
