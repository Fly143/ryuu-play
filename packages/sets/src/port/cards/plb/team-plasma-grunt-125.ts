import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamPlasmaGrunt_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PLB";
  public name: string = "Team Plasma Grunt";
  public fullName: string = "Team Plasma Grunt PLB 125";
  public text: string = "Discard a Team Plasma card from your card. (if you can't discard a Team Plasma card, you can't play this card.) Draw 4 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
