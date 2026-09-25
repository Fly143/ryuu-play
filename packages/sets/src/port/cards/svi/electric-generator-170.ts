import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ElectricGenerator_170 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SVI";
  public name: string = "Electric Generator";
  public fullName: string = "Electric Generator SVI 170";
  public text: string = "Look at the top 5 cards of your deck and attach up to 2 Basic Lightning Energy cards you find there to your Benched Lightning Pokémon in any way you like. Shuffle the other cards back into your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
