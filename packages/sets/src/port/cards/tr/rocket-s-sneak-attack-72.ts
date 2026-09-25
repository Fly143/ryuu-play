import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RocketSSneakAttack_72 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "Rocket's Sneak Attack";
  public fullName: string = "Rocket's Sneak Attack TR 72";
  public text: string = "Look at your opponent's hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffles that card into his or her deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "peekOpponentHand");
    }
    return state;
  }
}
