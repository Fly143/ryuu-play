import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StartlingMegaphone_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLF";
  public name: string = "Startling Megaphone";
  public fullName: string = "Startling Megaphone FLF 97";
  public text: string = "Discard all Pokémon Tool cards attached to each of your opponent's Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
