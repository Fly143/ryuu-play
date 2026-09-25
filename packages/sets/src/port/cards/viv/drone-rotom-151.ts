import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DroneRotom_151 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "VIV";
  public name: string = "Drone Rotom";
  public fullName: string = "Drone Rotom VIV 151";
  public text: string = "Your opponent reveals their hand. If they do, look at the top card of your opponent's deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
