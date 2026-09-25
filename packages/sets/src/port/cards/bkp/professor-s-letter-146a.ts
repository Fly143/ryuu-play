import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorSLetter_146a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BKP";
  public name: string = "Professor's Letter";
  public fullName: string = "Professor's Letter BKP 146a";
  public text: string = "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
