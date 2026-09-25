import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Artazon_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PAF";
  public name: string = "Artazon";
  public fullName: string = "Artazon PAF 76";
  public text: string = "Once during each player's turn, that player may search their deck for a Basic Pokémon that doesn't have a Rule Box and put it onto their Bench. Then, that player shuffles their deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:1");
    }
    return state;
  }
}
