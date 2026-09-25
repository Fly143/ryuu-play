import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BacktrackBadge_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PBL";
  public name: string = "Backtrack Badge";
  public fullName: string = "Backtrack Badge PBL 74";
  public text: string = "Once during your turn, after you flip any coins for an attack of the Colorless Pokémon this card is attached to, you may ignore all results of those coin flips and begin flipping those coins again.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
