import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RareCandy_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UL";
  public name: string = "Rare Candy";
  public fullName: string = "Rare Candy UL 82";
  public text: string = "Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card that evolves from that Pokémon in your hand, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.) If you choose a Stage 2 Pokémon in your hand, put that Pokémon on the Basic Pokémon instead of on a Stage 1 Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
    }
    return state;
  }
}
