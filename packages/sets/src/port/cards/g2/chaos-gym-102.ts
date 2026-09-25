import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChaosGym_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Chaos Gym";
  public fullName: string = "Chaos Gym G2 102";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. Whenever a player plays a Trainer card other than a Stadium card, he or she flips a coin. If heads, that player plays that card normally. If tails, the player can't play that card. If the card isn't put into play, the player's opponent may use that card instead, if he or she does everything required in order to play that card (like discarding cards). Either way, the card goes to its owner's discard pile.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
