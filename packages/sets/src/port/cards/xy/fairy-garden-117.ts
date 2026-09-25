import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FairyGarden_117 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "XY";
  public name: string = "Fairy Garden";
  public fullName: string = "Fairy Garden XY 117";
  public text: string = "Each Pokémon that has any Fairy Energy attached to it (both yours and your opponent's) has no Retreat Cost. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
