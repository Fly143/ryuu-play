import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LtSurgeSStrategy_60 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Lt. Surge's Strategy";
  public fullName: string = "Lt. Surge's Strategy HIF 60";
  public text: string = "You can play this card only if you have more Prize cards remaining than your opponent. During this turn, you can play 3 Supporter cards (including this card).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
