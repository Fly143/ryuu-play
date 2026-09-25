import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChillTeaserToy_166 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SSP";
  public name: string = "Chill Teaser Toy";
  public fullName: string = "Chill Teaser Toy SSP 166";
  public text: string = "You can use this card only if you go second, and only during your first turn. Put an Energy attached to 1 of your opponent's Pokémon into their hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
    }
    return state;
  }
}
