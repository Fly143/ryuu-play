import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokBall_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RCL";
  public name: string = "Poké Ball";
  public fullName: string = "Poké Ball RCL 164";
  public text: string = "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
