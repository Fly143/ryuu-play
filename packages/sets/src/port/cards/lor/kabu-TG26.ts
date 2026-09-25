import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class KabuTG26 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "LOR";
  public name: string = "Kabu";
  public fullName: string = "Kabu LOR TG26";
  public text: string = "Shuffle your hand into your deck. Then, draw 4 cards. If your Active Pokémon is your only Pokémon in play, draw 8 cards instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleDraw:4");
    }
    return state;
  }
}
