import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Ecogym_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N1";
  public name: string = "Ecogym";
  public fullName: string = "Ecogym N1 84";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever an attack, Pokémon Power, or Trainer card discards another player's non-Colorless Energy card from a Pokémon, return that Energy card to its owner's hand. (Energy cards that are discarded when that Pokémon is Knocked Out don't count.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
