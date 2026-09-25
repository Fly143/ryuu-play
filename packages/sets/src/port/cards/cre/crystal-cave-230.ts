import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrystalCave_230 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRE";
  public name: string = "Crystal Cave";
  public fullName: string = "Crystal Cave CRE 230";
  public text: string = "Once during each player's turn, that player may heal 30 damage from each of their Metal Pokémon and Dragon Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, 30);
    }
    return state;
  }
}
