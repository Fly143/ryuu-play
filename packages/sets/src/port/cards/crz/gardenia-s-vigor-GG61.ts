import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GardeniaSVigorGG61 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRZ";
  public name: string = "Gardenia's Vigor";
  public fullName: string = "Gardenia's Vigor CRZ GG61";
  public text: string = "Draw 2 cards. If you drew any cards in this way, attach up to 2 Grass Energy cards from your hand to 1 of your Benched Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
