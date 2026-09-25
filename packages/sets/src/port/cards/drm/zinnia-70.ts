import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Zinnia_70 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRM";
  public name: string = "Zinnia";
  public fullName: string = "Zinnia DRM 70";
  public text: string = "You can play this card only if 1 of your Pokémon was Knocked Out during your opponent's last turn. Attach up to 2 basic Energy cards from your hand to 1 of your Dragon Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
