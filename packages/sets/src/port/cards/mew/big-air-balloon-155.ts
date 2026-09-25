import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BigAirBalloon_155 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "MEW";
  public name: string = "Big Air Balloon";
  public fullName: string = "Big Air Balloon MEW 155";
  public text: string = "The Stage 2 Pokémon this card is attached to has no Retreat Cost. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
