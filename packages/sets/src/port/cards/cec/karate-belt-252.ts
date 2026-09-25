import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class KarateBelt_252 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CEC";
  public name: string = "Karate Belt";
  public fullName: string = "Karate Belt CEC 252";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If you have more Prize cards remaining than your opponent, the attacks of the Pokémon this card is attached to cost Fighting less. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
