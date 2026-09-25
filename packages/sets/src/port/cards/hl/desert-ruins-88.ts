import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DesertRuins_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HL";
  public name: string = "Desert Ruins";
  public fullName: string = "Desert Ruins HL 88";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. At any time between turns, each player puts 1 damage counter on his or her Pokémon-ex with maximum HP of at least 100.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
