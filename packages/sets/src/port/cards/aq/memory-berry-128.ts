import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MemoryBerry_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Memory Berry";
  public fullName: string = "Memory Berry AQ 128";
  public text: string = "Attach Memory Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to can use any attack from its Basic Pokémon card or any Evolution card from which the Pokémon evolved. (You still have to pay for that attack's Energy cost.) Discard this card at the end of any turn the Pokémon attacks.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
