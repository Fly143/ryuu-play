import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PowerPlant_139 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "AQ";
  public name: string = "Power Plant";
  public fullName: string = "Power Plant AQ 139";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each of his or her turns, a player may discard a basic Energy card from his or her hand. If that player does, he or she chooses a basic Energy card from his or her discard pile, shows it to his or her opponent, and then puts it into his or her hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
