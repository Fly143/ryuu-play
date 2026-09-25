import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TurffieldStadium_170 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "RCL";
  public name: string = "Turffield Stadium";
  public fullName: string = "Turffield Stadium RCL 170";
  public text: string = "Once during each player's turn, that player may search their deck for an Evolution Grass Pokémon, reveal it, and put it into their hand. Then, that player shuffles their deck. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
