import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ClefairyDoll_70 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Clefairy Doll";
  public fullName: string = "Clefairy Doll BS 70";
  public text: string = "Play Clefairy Doll as if it were a Basic Pokémon. While in play, Clefairy Doll counts as a Pokémon (instead of a Trainer card). Clefairy Doll has no attacks, can't retreat, and can't be Asleep, Confused, Paralyzed, or Poisoned. If Clefairy Doll is Knocked Out, it doesn't count as a Knocked Out Pokémon. At any time during your turn before your attack, you may discard Clefairy Doll.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
