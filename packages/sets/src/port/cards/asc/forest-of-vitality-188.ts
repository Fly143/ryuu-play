import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ForestOfVitality_188 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ASC";
  public name: string = "Forest of Vitality";
  public fullName: string = "Forest of Vitality ASC 188";
  public text: string = "Each player's Grass Pokémon can evolve into Grass Pokémon during the turn they play those Pokémon, except during their first turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "earlyEvolution");
    }
    return state;
  }
}
