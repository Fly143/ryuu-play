import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LegendBox_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UD";
  public name: string = "Legend Box";
  public fullName: string = "Legend Box UD 75";
  public text: string = "Reveal the top 10 cards of your deck. If you reveal both halves of a Pokémon LEGEND, put those cards onto your Bench and attach all revealed Energy cards to that Pokémon LEGEND. Shuffle the other cards back into your deck. (You can play only 1 Pokémon LEGEND in this way.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
