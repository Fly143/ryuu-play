import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FanOfWaves_226 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BST";
  public name: string = "Fan of Waves";
  public fullName: string = "Fan of Waves BST 226";
  public text: string = "Put a Special Energy attached to 1 of your opponent's Pokémon on the bottom of their deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
