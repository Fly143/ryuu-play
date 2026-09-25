import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ThunderMountain_191 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DRM";
  public name: string = "Thunder Mountain ◇";
  public fullName: string = "Thunder Mountain ◇ DRM 191";
  public text: string = "The attacks of Lightning Pokémon (both yours and your opponent's) cost Lightning less. Whenever any player plays an Item or Supporter card from their hand, prevent all effects of that card done to this Stadium card. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. ◇ (Prism Star) Rule: You can't have more than 1 ◇ card with the same name in your deck. If a ◇ card would go to the discard pile, put it in the Lost Zone instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
