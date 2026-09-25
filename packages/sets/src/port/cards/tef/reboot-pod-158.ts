import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RebootPod_158 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TEF";
  public name: string = "Reboot Pod";
  public fullName: string = "Reboot Pod TEF 158";
  public text: string = "Attach a Basic Energy card from your discard pile to each of your Future Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
