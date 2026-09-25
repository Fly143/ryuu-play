import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RuinsOfAlph_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "UD";
  public name: string = "Ruins of Alph";
  public fullName: string = "Ruins of Alph UD 76";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Pokémon in play has no Resistance.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
