import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SkyField_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "AOR";
  public name: string = "Sky Field";
  public fullName: string = "Sky Field AOR 89";
  public text: string = "Each player can have 8 Pokémon on his or her Bench. (When this card leaves play, each player discards Benched Pokémon until he or she has 5 Pokémon on the Bench. The owner of this card discards first.) This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
