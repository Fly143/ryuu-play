import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GlassTrumpet_135 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SCR";
  public name: string = "Glass Trumpet";
  public fullName: string = "Glass Trumpet SCR 135";
  public text: string = "You can use this card only if you have any Tera Pokémon in play. Choose up to 2 of your Benched Colorless Pokémon and attach a Basic Energy card from your discard pile to each of them. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscardToBench:2");
    }
    return state;
  }
}
