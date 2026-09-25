import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RescueStretcher_130a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GRI";
  public name: string = "Rescue Stretcher";
  public fullName: string = "Rescue Stretcher GRI 130a";
  public text: string = "Choose 1: • Put a Pokémon from your discard pile into your hand. • Shuffle 3 Pokémon from your discard pile into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
