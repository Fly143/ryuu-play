import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BuddyBuddyRescue_135 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BKP";
  public name: string = "Buddy-Buddy Rescue";
  public fullName: string = "Buddy-Buddy Rescue BKP 135";
  public text: string = "Each player puts a Pokémon from his or her discard pile into his or her hand. (Your opponent chooses first.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
