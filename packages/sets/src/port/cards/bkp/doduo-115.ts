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

export class Doduo_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Simultaneous Peck", cost: [], damage: "30", text: "Flip 2 coins. If either of them is tails, this attack does nothing." },
      { name: "Doduo Delivery", cost: [], damage: "", text: "Draw 2 cards." }
  ];
  public set: string = "BKP";
  public name: string = "Doduo";
  public fullName: string = "Doduo BKP 115";
  public text: string = "Doduo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
