import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Nugget_162 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RCL";
  public name: string = "Nugget";
  public fullName: string = "Nugget RCL 162";
  public text: string = "You can play this card only if you drew it from your deck at the beginning of your turn, before you put it into your hand. Draw 3 cards. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
