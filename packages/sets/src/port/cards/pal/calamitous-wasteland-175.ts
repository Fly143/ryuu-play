import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CalamitousWasteland_175 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PAL";
  public name: string = "Calamitous Wasteland";
  public fullName: string = "Calamitous Wasteland PAL 175";
  public text: string = "The Retreat Cost of each Basic non-Fighting Pokémon in play (both yours and your opponent's) is Colorless more.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
