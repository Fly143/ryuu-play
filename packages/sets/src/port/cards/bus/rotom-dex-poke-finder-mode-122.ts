import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RotomDexPokFinderMode_122 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BUS";
  public name: string = "Rotom Dex Poké Finder Mode";
  public fullName: string = "Rotom Dex Poké Finder Mode BUS 122";
  public text: string = "Look at the top 4 cards of your deck and put them back in any order or shuffle them into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
