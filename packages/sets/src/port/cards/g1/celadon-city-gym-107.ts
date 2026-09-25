import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CeladonCityGym_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "Celadon City Gym";
  public fullName: string = "Celadon City Gym G1 107";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. During each player's turn, that player may choose to discard an Energy card attached to 1 of his or her Pokémon with Erika in its name. If that player does so, that Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
