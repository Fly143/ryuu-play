import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AirBalloon_213 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SSH";
  public name: string = "Air Balloon";
  public fullName: string = "Air Balloon SSH 213";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
