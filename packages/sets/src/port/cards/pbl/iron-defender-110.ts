import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class IronDefender_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PBL";
  public name: string = "Iron Defender";
  public fullName: string = "Iron Defender PBL 110";
  public text: string = "During your opponent's next turn, all of your Metal Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). (This includes new Pokémon that come into play.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:30");
    }
    return state;
  }
}
