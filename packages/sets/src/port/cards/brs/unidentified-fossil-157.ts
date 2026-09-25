import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UnidentifiedFossil_157 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BRS";
  public name: string = "Unidentified Fossil";
  public fullName: string = "Unidentified Fossil BRS 157";
  public text: string = "Play this card as if it were a 60-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can't retreat. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
