import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UnidentifiedFossil_155 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNB";
  public name: string = "Unidentified Fossil";
  public fullName: string = "Unidentified Fossil UNB 155";
  public text: string = "Play this card as if it were a 60-HP Colorless Basic Pokémon. At any time during your turn (before your attack), you may discard this card from play. This card can't retreat. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
