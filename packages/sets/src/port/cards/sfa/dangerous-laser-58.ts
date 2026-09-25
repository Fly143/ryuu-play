import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DangerousLaser_58 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SFA";
  public name: string = "Dangerous Laser";
  public fullName: string = "Dangerous Laser SFA 58";
  public text: string = "Your opponent's Active Pokémon is now Burned and Confused. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
