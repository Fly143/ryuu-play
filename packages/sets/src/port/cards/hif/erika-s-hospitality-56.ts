import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ErikaSHospitality_56 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Erika's Hospitality";
  public fullName: string = "Erika's Hospitality HIF 56";
  public text: string = "You can play this card only if you have 4 or fewer other cards in your hand. Draw a card for each of your opponent's Pokémon in play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "drawPerOpponentBench:1");
    }
    return state;
  }
}
