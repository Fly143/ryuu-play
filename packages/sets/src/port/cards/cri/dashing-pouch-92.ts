import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DashingPouch_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CRI";
  public name: string = "Dashing Pouch";
  public fullName: string = "Dashing Pouch CRI 92";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to discards Energy for its Retreat Cost, put that Energy into your hand instead of the discard pile. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
