import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SilentLab_140 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ROS";
  public name: string = "Silent Lab";
  public fullName: string = "Silent Lab ROS 140";
  public text: string = "Each Basic Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
