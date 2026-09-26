import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StevenSAdvice_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PK";
  public name: string = "Steven's Advice";
  public fullName: string = "Steven's Advice PK 83";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw a number of cards up to the number of your opponent's Pokémon in play. If you have 7 or more cards (including this one) in your hand, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "drawPerOpponentBench:1");
    }
    return state;
  }
}
