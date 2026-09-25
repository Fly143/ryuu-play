import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class IslandCave_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HL";
  public name: string = "Island Cave";
  public fullName: string = "Island Cave HL 89";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever any player attaches an Energy card from his or her hand to Water Pokémon, Fighting Pokémon, or Metal Pokémon, remove any Special Conditions from that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
