import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MrBrineySCompassion_8 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "POP2";
  public name: string = "Mr. Briney's Compassion";
  public fullName: string = "Mr. Briney's Compassion POP2 8";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 1 of your Pokémon in play (excluding Pokémon-ex). Return that Pokémon and all cards attached to it to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "scoopUpSelf");
    }
    return state;
  }
}
