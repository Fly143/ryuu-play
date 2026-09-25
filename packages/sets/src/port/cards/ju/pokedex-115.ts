import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokDex_115 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "Pokédex";
  public fullName: string = "Pokédex JU 115";
  public text: string = "Look at up to 5 cards from the top of your deck and rearrange them as you like.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokedex");
    }
    return state;
  }
}
