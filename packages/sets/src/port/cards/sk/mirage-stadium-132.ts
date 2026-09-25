import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MirageStadium_132 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SK";
  public name: string = "Mirage Stadium";
  public fullName: string = "Mirage Stadium SK 132";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever a player tries to retreat a Pokémon during his or her turn, that player flips a coin. If heads, that player retreats that Pokémon (and discards Energy normally). If tails, that Pokémon can't retreat this turn (the player doesn't discard any Energy).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
