import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LifeHerb_90 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HL";
  public name: string = "Life Herb";
  public fullName: string = "Life Herb HL 90";
  public text: string = "Flip a coin. If heads, choose 1 of your Pokémon (excluding Pokémon-ex). Remove all Special Conditions and 6 damage counters from that Pokémon (all if there are less than 6).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
