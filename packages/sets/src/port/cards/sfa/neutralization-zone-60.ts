import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NeutralizationZone_60 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SFA";
  public name: string = "Neutralization Zone";
  public fullName: string = "Neutralization Zone SFA 60";
  public text: string = "Prevent all damage done to Pokémon that don't have a Rule Box (both yours and your opponent's) by attacks from the opponent's Pokémon ex and Pokémon V. (Pokémon ex, Pokémon V, etc. have Rule Boxes.) This card can't be put into your hand or deck from the discard pile.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
