import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaGrunt_26 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DCR";
  public name: string = "Team Aqua Grunt";
  public fullName: string = "Team Aqua Grunt DCR 26";
  public text: string = "Discard a card from your hand. (If you can't discard a card, you can't play this card.) Draw 3 cards. If you discarded a Team Aqua Pokémon, draw 1 more card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
