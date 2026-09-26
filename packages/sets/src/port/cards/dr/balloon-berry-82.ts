import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BalloonBerry_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DR";
  public name: string = "Balloon Berry";
  public fullName: string = "Balloon Berry DR 82";
  public text: string = "Attach Balloon Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. When the Pokémon Balloon Berry is attached to retreats, discard Balloon Berry instead of discarding Energy cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
