import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Switch_144 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRZ";
  public name: string = "Switch";
  public fullName: string = "Switch CRZ 144";
  public text: string = "Switch your Active Pokémon with 1 of your Benched Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
