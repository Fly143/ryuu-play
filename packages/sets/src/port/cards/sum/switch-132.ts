import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Switch_132 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SUM";
  public name: string = "Switch";
  public fullName: string = "Switch SUM 132";
  public text: string = "Switch your Active Pokémon with 1 of your Benched Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
