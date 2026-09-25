import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PoTown_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BUS";
  public name: string = "Po Town";
  public fullName: string = "Po Town BUS 121";
  public text: string = "Whenever any player plays a Pokémon from their hand to evolve 1 of their Pokémon, put 3 damage counters on that Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
