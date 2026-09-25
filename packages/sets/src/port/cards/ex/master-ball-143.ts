import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MasterBall_143 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EX";
  public name: string = "Master Ball";
  public fullName: string = "Master Ball EX 143";
  public text: string = "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, and put it into your hand. Shuffle the rest into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
