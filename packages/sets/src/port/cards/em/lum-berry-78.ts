import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LumBerry_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "EM";
  public name: string = "Lum Berry";
  public fullName: string = "Lum Berry EM 78";
  public text: string = "Attach Lum Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to is affected by any Special Conditions, remove all of them. Then, discard Lum Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
