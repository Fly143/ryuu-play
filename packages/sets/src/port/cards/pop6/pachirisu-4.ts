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

export class Pachirisu_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Minor Errand-Running", cost: [], damage: "", text: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Thunder Jolt", cost: [], damage: "20", text: "Flip a coin. If tails, Pachirisu does 10 damage to itself." }
  ];
  public set: string = "POP6";
  public name: string = "Pachirisu";
  public fullName: string = "Pachirisu POP6 4";
  public text: string = "Pachirisu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
