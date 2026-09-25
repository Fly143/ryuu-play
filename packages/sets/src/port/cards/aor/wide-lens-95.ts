import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WideLens_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AOR";
  public name: string = "Wide Lens";
  public fullName: string = "Wide Lens AOR 95";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Damage from the attacks of the Pokémon this card is attached to is affected by Weakness and Resistance for your opponent's Benched Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
