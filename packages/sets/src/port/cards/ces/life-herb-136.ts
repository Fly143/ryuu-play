import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LifeHerb_136 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CES";
  public name: string = "Life Herb";
  public fullName: string = "Life Herb CES 136";
  public text: string = "Flip a coin. If heads, heal 60 damage and remove all Special Conditions from 1 of your Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
