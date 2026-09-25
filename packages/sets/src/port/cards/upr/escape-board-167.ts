import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EscapeBoard_167 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UPR";
  public name: string = "Escape Board";
  public fullName: string = "Escape Board UPR 167";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Retreat Cost of the Pokémon this card is attached to is Colorless less, and it can retreat even if it's Asleep or Paralyzed. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
