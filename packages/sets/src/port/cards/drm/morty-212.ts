import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Morty_212 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRM";
  public name: string = "Morty";
  public fullName: string = "Morty DRM 212";
  public text: string = "You can play this card only if 1 of your Psychic Pokémon was Knocked Out during your opponent's last turn. Your opponent reveals their hand. Choose 2 cards you find there. Your opponent shuffles those cards into their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
