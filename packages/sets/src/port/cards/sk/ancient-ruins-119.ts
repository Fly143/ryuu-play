import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AncientRuins_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SK";
  public name: string = "Ancient Ruins";
  public fullName: string = "Ancient Ruins SK 119";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before he or she attacks), if he or she has not played a Supporter card, that player may reveal his or her hand to his or her opponent. If that player reveals his or her hand and there is no Supporter card there, that player draws a card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
