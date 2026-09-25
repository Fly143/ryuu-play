import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BossSOrdersTG24 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "LOR";
  public name: string = "Boss's Orders";
  public fullName: string = "Boss's Orders LOR TG24";
  public text: string = "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
