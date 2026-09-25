import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MemoryBerry_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CG";
  public name: string = "Memory Berry";
  public fullName: string = "Memory Berry CG 80";
  public text: string = "Attach Memory Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.) If that Pokémon attacks, discard this card at the end of the turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
