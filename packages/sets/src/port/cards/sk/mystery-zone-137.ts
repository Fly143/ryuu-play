import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MysteryZone_137 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SK";
  public name: string = "Mystery Zone";
  public fullName: string = "Mystery Zone SK 137";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before he or she attacks), if that player has an Evolution card in his or her hand, he or she may search his or her deck for a basic Energy card, show it to his or her opponent, and put it into his or her hand. Then that player chooses an Evolution card from his or her hand, shows it to his or her opponent, and puts it into his or her deck. That player shuffles his or her deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
