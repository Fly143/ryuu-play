import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaGrunt_30 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DCR";
  public name: string = "Team Magma Grunt";
  public fullName: string = "Team Magma Grunt DCR 30";
  public text: string = "Discard a card from your hand. (If you can't discard a card, you can't play this card.) Draw 3 cards. If you discarded a Team Magma Pokémon, draw 1 more card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
