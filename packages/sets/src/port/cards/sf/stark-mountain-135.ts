import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StarkMountain_135 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SF";
  public name: string = "Stark Mountain";
  public fullName: string = "Stark Mountain SF 135";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, that player may choose a Fire or Fighting Energy attached to 1 of his or her Pokémon and move that Energy to 1 of his or her Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
