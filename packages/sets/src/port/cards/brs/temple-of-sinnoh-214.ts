import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TempleOfSinnoh_214 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BRS";
  public name: string = "Temple of Sinnoh";
  public fullName: string = "Temple of Sinnoh BRS 214";
  public text: string = "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
