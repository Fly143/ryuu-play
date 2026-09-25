import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CaptivatingPokPuff_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "STS";
  public name: string = "Captivating Poké Puff";
  public fullName: string = "Captivating Poké Puff STS 99";
  public text: string = "Your opponent reveals his or her hand. Put any number of Basic Pokémon you find there onto your opponent's Bench. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
