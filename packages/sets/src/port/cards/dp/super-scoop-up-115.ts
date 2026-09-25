import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperScoopUp_115 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DP";
  public name: string = "Super Scoop Up";
  public fullName: string = "Super Scoop Up DP 115";
  public text: string = "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* superScoopUp */ state;
    }
    return state;
  }
}
