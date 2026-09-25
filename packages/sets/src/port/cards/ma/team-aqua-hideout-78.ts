import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaHideout_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "MA";
  public name: string = "Team Aqua Hideout";
  public fullName: string = "Team Aqua Hideout MA 78";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Pokémon that does not have Team Aqua in its name pays Colorless more to retreat.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
