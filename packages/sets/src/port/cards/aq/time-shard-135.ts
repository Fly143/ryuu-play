import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TimeShard_135 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Time Shard";
  public fullName: string = "Time Shard AQ 135";
  public text: string = "Attach Time Shard to 1 of your Pokémon that doesn't already have a Pokémon Tool card attached to it. If that Pokémon is Knocked Out, discard this card. If the Pokémon this card is attached to is Knocked Out by damage from the Defending Pokémon's attack during your opponent's turn, you may return up to 2 basic Energy cards attached to that Pokémon to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
