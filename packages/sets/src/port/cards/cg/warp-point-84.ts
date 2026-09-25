import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WarpPoint_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CG";
  public name: string = "Warp Point";
  public fullName: string = "Warp Point CG 84";
  public text: string = "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your Benched Pokémon, if any.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
