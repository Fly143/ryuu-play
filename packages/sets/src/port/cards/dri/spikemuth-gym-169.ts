import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SpikemuthGym_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DRI";
  public name: string = "Spikemuth Gym";
  public fullName: string = "Spikemuth Gym DRI 169";
  public text: string = "Once during each player's turn, that player may search their deck for a Marnie's Pokémon, reveal it, and put it into their hand. Then, that player shuffles their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
