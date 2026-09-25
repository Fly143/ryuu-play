import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FireMemory_123 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UPR";
  public name: string = "Fire Memory";
  public fullName: string = "Fire Memory UPR 123";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Silvally-GX this card is attached to is a Fire Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
