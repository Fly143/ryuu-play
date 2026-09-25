import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LumBerry_168 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SSH";
  public name: string = "Lum Berry";
  public fullName: string = "Lum Berry SSH 168";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
