import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CardFlipGame_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Card-Flip Game";
  public fullName: string = "Card-Flip Game N1 92";
  public text: string = "Choose 1 of your opponent's face-down Prizes. Guess whether it is an Energy card, a Trainer card, or a Pokémon (Basic or Evolution) card. Flip the card face up (and leave it face up). If you guessed right, draw 2 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
