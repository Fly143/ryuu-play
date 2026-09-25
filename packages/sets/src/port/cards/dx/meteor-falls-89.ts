import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MeteorFalls_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DX";
  public name: string = "Meteor Falls";
  public fullName: string = "Meteor Falls DX 89";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player's Active Evolved Pokémon (excluding Pokémon-ex) can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
