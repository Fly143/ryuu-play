import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AncientTechnicalMachineIce_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "HL";
  public name: string = "Ancient Technical Machine [Ice]";
  public fullName: string = "Ancient Technical Machine [Ice] HL 84";
  public text: string = "Attach this card to 1 of your Evolved Pokémon (excluding Pokémon-ex and Pokémon that has an owner in its name) in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Ancient Technical Machine [Ice].";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
