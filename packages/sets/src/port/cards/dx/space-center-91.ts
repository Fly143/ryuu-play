import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SpaceCenter_91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DX";
  public name: string = "Space Center";
  public fullName: string = "Space Center DX 91";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Ignore Poké-Bodies for all Basic Pokémon in play (both yours and your opponent's) (excluding Pokémon-ex and Pokémon that has an owner in its name).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
