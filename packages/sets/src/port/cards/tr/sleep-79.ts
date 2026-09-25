import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Sleep_79 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "Sleep!";
  public fullName: string = "Sleep! TR 79";
  public text: string = "Flip a coin. If heads, the Defending Pokémon is now Asleep.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipHeadsSpecial:ASLEEP */ state;
    }
    return state;
  }
}
