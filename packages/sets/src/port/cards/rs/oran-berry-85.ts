import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OranBerry_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "RS";
  public name: string = "Oran Berry";
  public fullName: string = "Oran Berry RS 85";
  public text: string = "Attach Oran Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to has at least 2 damage counters on it, remove 2 damage counters from it. Then discard Oran Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
