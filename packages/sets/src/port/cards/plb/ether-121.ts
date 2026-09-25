import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Ether_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLB";
  public name: string = "Ether";
  public fullName: string = "Ether PLB 121";
  public text: string = "Reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If it is not a basic Energy card, return it to the top of your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscard");
    }
    return state;
  }
}
