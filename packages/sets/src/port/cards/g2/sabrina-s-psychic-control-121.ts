import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SabrinaSPsychicControl_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Sabrina's Psychic Control";
  public fullName: string = "Sabrina's Psychic Control G2 121";
  public text: string = "Flip a coin. If heads, choose a Trainer card in your opponent's discard pile that isn't put in play (like PlusPower or Mysterious Fossil). You may use that card as if it were in your hand, if you do everything required in order to play that card (like discarding cards). The card stays in your opponent's discard pile.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
