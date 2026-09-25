import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GymTrainer_158 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PGO";
  public name: string = "Gym Trainer";
  public fullName: string = "Gym Trainer PGO 158";
  public text: string = "Draw 2 cards. If any of your Pokémon were Knocked Out during your opponent's last turn, draw 2 more cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 4);
    }
    return state;
  }
}
