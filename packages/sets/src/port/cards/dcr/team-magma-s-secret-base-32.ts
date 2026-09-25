import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaSSecretBase_32 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DCR";
  public name: string = "Team Magma's Secret Base";
  public fullName: string = "Team Magma's Secret Base DCR 32";
  public text: string = "Whenever any player puts a Basic Pokémon (except for Team Magma Pokémon) from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
