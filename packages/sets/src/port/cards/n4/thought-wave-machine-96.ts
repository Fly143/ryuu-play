import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ThoughtWaveMachine_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Thought Wave Machine";
  public fullName: string = "Thought Wave Machine N4 96";
  public text: string = "Flip a coin until you get tails. For each heads, return an Energy card attached to your opponent's Active Pokémon to your opponent's hand. If the Pokémon has fewer attached Energy cards than that, return all of them to your opponent's hand. Your turn is over now (you don't get to attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
