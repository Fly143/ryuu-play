import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DomeFossil_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AR";
  public name: string = "Dome Fossil";
  public fullName: string = "Dome Fossil AR 92";
  public text: string = "Play Dome Fossil as if it were a Colorless Basic Pokémon. (Dome Fossil counts as a Trainer card as well, but if Dome Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Dome Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Dome Fossil from play. (This doesn't count as a Knocked Out Pokémon.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
