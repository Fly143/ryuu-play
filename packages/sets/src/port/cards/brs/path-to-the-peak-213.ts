import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PathToThePeak_213 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BRS";
  public name: string = "Path to the Peak";
  public fullName: string = "Path to the Peak BRS 213";
  public text: string = "Pokémon with a Rule Box in play (both yours and your opponent's) have no Abilities. (Pokémon V, Pokémon-GX, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
