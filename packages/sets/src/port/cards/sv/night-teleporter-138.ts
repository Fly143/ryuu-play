import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NightTeleporter_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SV";
  public name: string = "Night Teleporter";
  public fullName: string = "Night Teleporter SV 138";
  public text: string = "Flip a coin. If heads, put all cards in your hand on top of your deck. Then, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
