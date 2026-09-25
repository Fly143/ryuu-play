import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RescueStretcher_165 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BUS";
  public name: string = "Rescue Stretcher";
  public fullName: string = "Rescue Stretcher BUS 165";
  public text: string = "Choose 1: • Put a Pokémon from your discard pile into your hand. • Shuffle 3 Pokémon from your discard pile into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
