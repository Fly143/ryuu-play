import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MysteryGarden_194 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ASC";
  public name: string = "Mystery Garden";
  public fullName: string = "Mystery Garden ASC 194";
  public text: string = "Once during each player's turn, that player may discard an Energy card from their hand in order to draw cards until they have as many cards in their hand as they have Psychic Pokémon in play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
