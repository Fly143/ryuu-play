import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ClemontSQuickWit_229 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SSP";
  public name: string = "Clemont's Quick Wit";
  public fullName: string = "Clemont's Quick Wit SSP 229";
  public text: string = "Heal 60 damage from each of your Lightning Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, 60);
    }
    return state;
  }
}
