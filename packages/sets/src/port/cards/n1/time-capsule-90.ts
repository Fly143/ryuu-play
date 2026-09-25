import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TimeCapsule_90 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Time Capsule";
  public fullName: string = "Time Capsule N1 90";
  public text: string = "Your opponent may choose 5 Basic Pokémon, Evolution, and/or basic Energy cards in his or her discard pile. (If your opponent doesn't have that many, he or she chooses all or none of them.) If your opponent chooses any cards, he or she shuffles them into his or her deck. Either way, you may do the same, and you can't play any more Trainer cards this turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
