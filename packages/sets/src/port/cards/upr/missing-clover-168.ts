import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MissingClover_168 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UPR";
  public name: string = "Missing Clover";
  public fullName: string = "Missing Clover UPR 168";
  public text: string = "You may play 4 Missing Clover cards at once. • If you played 1 card, look at the top card of your deck. • If you played 4 cards, take a Prize card. (This effect works one time for 4 cards.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
