import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrystalBeach_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CG";
  public name: string = "Crystal Beach";
  public fullName: string = "Crystal Beach CG 75";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Special Energy card that provides 2 or more Energy (both yours and your opponent's) now provides only 1 Colorless Energy. This isn't affected by any Poké-Powers or Poké-Bodies.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
