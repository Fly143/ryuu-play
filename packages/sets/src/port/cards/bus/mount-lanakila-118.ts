import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MountLanakila_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BUS";
  public name: string = "Mount Lanakila";
  public fullName: string = "Mount Lanakila BUS 118";
  public text: string = "The Retreat Cost of each Basic Pokémon in play (both yours and your opponent's) is Colorless more. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
