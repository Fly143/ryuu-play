import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TurboPatch_172 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DAA";
  public name: string = "Turbo Patch";
  public fullName: string = "Turbo Patch DAA 172";
  public text: string = "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Basic Pokémon that isn't a Pokémon-GX. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
