import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AllNightParty_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "GEN";
  public name: string = "All-Night Party";
  public fullName: string = "All-Night Party GEN 96";
  public text: string = "Once during each player's turn, if that player's Active Pokémon is Asleep, he or she may remove that Special Condition and heal 30 damage from that Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
