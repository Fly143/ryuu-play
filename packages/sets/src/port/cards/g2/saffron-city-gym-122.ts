import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SaffronCityGym_122 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Saffron City Gym";
  public fullName: string = "Saffron City Gym G2 122";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. As often as each player like during his or her turn (before attacking), that player may return 1 basic Energy card attached to 1 of his or her Pokémon with Sabrina in its name to his or her hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
