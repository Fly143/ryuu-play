import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WeaknessPolicy_126 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BUS";
  public name: string = "Weakness Policy";
  public fullName: string = "Weakness Policy BUS 126";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Pokémon this card is attached to has no Weakness. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
