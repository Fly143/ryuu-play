import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrushingHammer_111 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PHF";
  public name: string = "Crushing Hammer";
  public fullName: string = "Crushing Hammer PHF 111";
  public text: string = "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipHeadsDiscardEnergyOpponent */ state;
    }
    return state;
  }
}
