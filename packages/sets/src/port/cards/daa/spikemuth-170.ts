import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Spikemuth_170 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DAA";
  public name: string = "Spikemuth";
  public fullName: string = "Spikemuth DAA 170";
  public text: string = "Whenever a player's Active Pokémon moves to the Bench during their turn, put 2 damage counters on that Pokémon. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
