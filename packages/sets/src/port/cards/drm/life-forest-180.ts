import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LifeForest_180 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DRM";
  public name: string = "Life Forest ◇";
  public fullName: string = "Life Forest ◇ DRM 180";
  public text: string = "Once during each player's turn, that player may heal 60 damage and remove all Special Conditions from 1 of their Grass Pokémon. Whenever any player plays an Item or Supporter card from their hand, prevent all effects of that card done to this Stadium card. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. ◇ (Prism Star) Rule: You can't have more than 1 ◇ card with the same name in your deck. If a ◇ card would go to the discard pile, put it in the Lost Zone instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
