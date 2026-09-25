import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BirdKeeper_159 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DAA";
  public name: string = "Bird Keeper";
  public fullName: string = "Bird Keeper DAA 159";
  public text: string = "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
