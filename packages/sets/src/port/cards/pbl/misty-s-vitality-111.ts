import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySVitality_111 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PBL";
  public name: string = "Misty's Vitality";
  public fullName: string = "Misty's Vitality PBL 111";
  public text: string = "Search your deck for up to 4 Basic Water Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck. Your turn ends.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:4");
    }
    return state;
  }
}
