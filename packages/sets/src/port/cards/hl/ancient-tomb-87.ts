import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AncientTomb_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HL";
  public name: string = "Ancient Tomb";
  public fullName: string = "Ancient Tomb HL 87";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Don't apply Weakness for all Pokémon in play (excluding Pokémon-ex and Pokémon that has an owner in its name).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
