import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AntiqueJawFossil_68 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "POR";
  public name: string = "Antique Jaw Fossil";
  public fullName: string = "Antique Jaw Fossil POR 68";
  public text: string = "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat. At any time during your turn, you may discard this card from play. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
