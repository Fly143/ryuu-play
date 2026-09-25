import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PrimeCatcher_157 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TEF";
  public name: string = "Prime Catcher";
  public fullName: string = "Prime Catcher TEF 157";
  public text: string = "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, switch your Active Pokémon with 1 of your Benched Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
