import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SteelShelter_105 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PHF";
  public name: string = "Steel Shelter";
  public fullName: string = "Steel Shelter PHF 105";
  public text: string = "Each Metal Pokémon (both yours and your opponent's) can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.) This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
