import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NewPokDex_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "New Pokédex";
  public fullName: string = "New Pokédex N1 95";
  public text: string = "Shuffle your deck. Then, look at up to 5 cards from the top of your deck and rearrange them as you like.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
