import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ForestOfGiantPlants_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BKT";
  public name: string = "Forest of Giant Plants";
  public fullName: string = "Forest of Giant Plants BKT 74";
  public text: string = "Each player's Grass Pokémon can evolve during his or her first turn or the turn he or she plays those Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
