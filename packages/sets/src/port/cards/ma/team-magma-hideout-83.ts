import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaHideout_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "MA";
  public name: string = "Team Magma Hideout";
  public fullName: string = "Team Magma Hideout MA 83";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever any player plays a Basic Pokémon that doesn't have Team Magma in its name from his or her hand, that player puts 1 damage counter on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
