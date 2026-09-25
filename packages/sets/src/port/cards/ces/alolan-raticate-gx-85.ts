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

export class AlolanRaticateGX_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Rattata";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chuck Away", cost: [], damage: "40×", text: "Discard up to 2 cards from your hand. This attack does 40 damage for each card you discarded in this way." },
      { name: "Hyper Fang", cost: [], damage: "150", text: "Flip a coin. If tails, this attack does nothing." },
      { name: "Item Maniac-GX", cost: [], damage: "", text: "Search your deck for up to 6 Item cards, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CES";
  public name: string = "Alolan Raticate-GX";
  public fullName: string = "Alolan Raticate-GX CES 85";
  public text: string = "Alolan Raticate-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
