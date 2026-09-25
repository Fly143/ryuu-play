import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FishermanSV83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Fisherman";
  public fullName: string = "Fisherman HIF SV83";
  public text: string = "Put 4 basic Energy cards from your discard pile into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* recoverEnergyFromDiscard:4 */ state;
    }
    return state;
  }
}
