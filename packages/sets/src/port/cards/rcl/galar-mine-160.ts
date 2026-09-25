import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GalarMine_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "RCL";
  public name: string = "Galar Mine";
  public fullName: string = "Galar Mine RCL 160";
  public text: string = "The Retreat Cost of both Active Pokémon is ColorlessColorless more. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
