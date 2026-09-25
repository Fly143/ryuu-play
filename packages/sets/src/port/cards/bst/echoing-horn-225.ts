import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EchoingHorn_225 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BST";
  public name: string = "Echoing Horn";
  public fullName: string = "Echoing Horn BST 225";
  public text: string = "Put a Basic Pokémon from your opponent's discard pile onto their Bench. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
