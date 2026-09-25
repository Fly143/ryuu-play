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

export class GalarianMeowth_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pay Day", cost: [], damage: "10", text: "Draw a card." },
      { name: "Treasure Rush", cost: [], damage: "10×", text: "This attack does 10 damage for each card in your hand." }
  ];
  public set: string = "30C";
  public name: string = "Galarian Meowth";
  public fullName: string = "Galarian Meowth 30C 101";
  public text: string = "Galarian Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesHand:10:self");
    }
    return state;
  }
}
