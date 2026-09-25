import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCommunication_196 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNB";
  public name: string = "Pokémon Communication";
  public fullName: string = "Pokémon Communication UNB 196";
  public text: string = "Reveal a Pokémon from your hand and put it into your deck. If you do, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
