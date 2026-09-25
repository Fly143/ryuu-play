import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BigCharm_206 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "RCL";
  public name: string = "Big Charm";
  public fullName: string = "Big Charm RCL 206";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Pokémon this card is attached to gets +30 HP. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
