import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CharonSChoiceRT6 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "RR";
  public name: string = "Charon's Choice";
  public fullName: string = "Charon's Choice RR RT6";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, put this card into your hand instead of discarding it. Search your deck for any Rotom and switch it with any Rotom you have in play. Any cards attached to Rotom and damage counters on it are now on the new Pokémon. (Remove all Special Conditions and effects from Rotom.) Put Rotom on top of your deck. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
