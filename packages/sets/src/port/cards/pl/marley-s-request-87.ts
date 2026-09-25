import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MarleySRequest_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PL";
  public name: string = "Marley's Request";
  public fullName: string = "Marley's Request PL 87";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your discard pile for 2 different Trainer, Supporter, or Stadium cards, show them to your opponent, and your opponent chooses 1 of them. Put that card into your hand, and discard the other card. (If all Trainer, Supporter, and Stadium cards in your discard pile have the same name, choose 1 of them. Show that card to your opponent and put it into your hand.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
