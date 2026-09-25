import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CalamitousSnowyMountain_174 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PAL";
  public name: string = "Calamitous Snowy Mountain";
  public fullName: string = "Calamitous Snowy Mountain PAL 174";
  public text: string = "Whenever any player attaches an Energy card from their hand to 1 of their Basic non-Water Pokémon, put 2 damage counters on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
