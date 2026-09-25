import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LtSurgeSSecretPlan_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Lt. Surge's Secret Plan";
  public fullName: string = "Lt. Surge's Secret Plan G2 107";
  public text: string = "Put 1 card from your hand face down onto your Bench. (You can't play this card if your Bench is full.) Treat that card as a Basic Pokémon as long as it's face down. Flip the card if either player needs to know what it is in order to use an attack, a Pokémon Power, or a Trainer card. Flip the card if it ever uses an attack or Pokémon Power, evolves, retreats, is damaged by an attack, or is otherwise affected by an attack. At any time during your turn, you may flip the card over. When you flip that card over, if it isn't a Basic Pokémon, discard it and all cards attached to it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "roughSkin");
    }
    return state;
  }
}
