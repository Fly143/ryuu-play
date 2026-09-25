import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AncientTechnicalMachineRock_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "HL";
  public name: string = "Ancient Technical Machine [Rock]";
  public fullName: string = "Ancient Technical Machine [Rock] HL 85";
  public text: string = "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Rock].";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
