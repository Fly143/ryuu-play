import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BuffPadding_136 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UNB";
  public name: string = "Buff Padding";
  public fullName: string = "Buff Padding UNB 136";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to has a Retreat Cost of exactly 4, it gets +50 HP. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
