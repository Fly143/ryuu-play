import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GiantStump_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "LM";
  public name: string = "Giant Stump";
  public fullName: string = "Giant Stump LM 75";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player can't have more than 3 Benched Pokémon. When Giant Stump comes into play, each player discards Benched Pokémon and any cards attached to them until he or she has 3 Benched Pokémon. (You discard your Pokémon first.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
