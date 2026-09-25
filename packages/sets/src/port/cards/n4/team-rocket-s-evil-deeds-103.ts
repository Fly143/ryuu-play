import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSEvilDeeds_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Team Rocket's Evil Deeds";
  public fullName: string = "Team Rocket's Evil Deeds N4 103";
  public text: string = "Look at your opponent's hand and choose a card there. Your opponent shuffles that card into his or her deck. Then, your opponent may draw up to 2 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
