import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LifeDew_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FLF";
  public name: string = "Life Dew";
  public fullName: string = "Life Dew FLF 107";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is Knocked Out, your opponent takes 1 fewer Prize card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
