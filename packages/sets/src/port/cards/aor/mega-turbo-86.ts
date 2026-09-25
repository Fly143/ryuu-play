import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MegaTurbo_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AOR";
  public name: string = "Mega Turbo";
  public fullName: string = "Mega Turbo AOR 86";
  public text: string = "Attach a basic Energy card from your discard pile to 1 of your Mega Evolution Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
