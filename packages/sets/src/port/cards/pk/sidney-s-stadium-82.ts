import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SidneySStadium_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PK";
  public name: string = "Sidney's Stadium";
  public fullName: string = "Sidney's Stadium PK 82";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player's Darkness Pokémon can't be Asleep, Confused, or Paralyzed.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
