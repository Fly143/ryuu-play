import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ArchieSAceInTheHole_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ROS";
  public name: string = "Archie's Ace in the Hole";
  public fullName: string = "Archie's Ace in the Hole ROS 124";
  public text: string = "You can play this card only when it is the last card in your hand. Put a Water Pokémon from your discard pile onto your Bench. Then, draw 5 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
