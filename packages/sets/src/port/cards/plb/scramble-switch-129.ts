import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ScrambleSwitch_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLB";
  public name: string = "Scramble Switch";
  public fullName: string = "Scramble Switch PLB 129";
  public text: string = "Switch your Active Pokémon with 1 of your Benched Pokémon. Then, you may move as many Energy attached to the old Active Pokémon to the new Active Pokémon as you like. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
