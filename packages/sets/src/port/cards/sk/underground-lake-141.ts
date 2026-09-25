import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UndergroundLake_141 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SK";
  public name: string = "Underground Lake";
  public fullName: string = "Underground Lake SK 141";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn, that player may put an Omanyte or a Kabuto card from his or her discard pile onto his or her Bench. (Cards put on the Bench this way are considered Basic Pokémon.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
