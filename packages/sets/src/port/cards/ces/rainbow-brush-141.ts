import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RainbowBrush_141 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CES";
  public name: string = "Rainbow Brush";
  public fullName: string = "Rainbow Brush CES 141";
  public text: string = "Choose an Energy card attached to 1 of your Pokémon. Search your deck for a basic Energy card and switch it with that card. Shuffle the first Energy card into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
