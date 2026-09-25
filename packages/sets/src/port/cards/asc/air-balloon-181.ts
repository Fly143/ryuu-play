import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AirBalloon_181 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "ASC";
  public name: string = "Air Balloon";
  public fullName: string = "Air Balloon ASC 181";
  public text: string = "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
