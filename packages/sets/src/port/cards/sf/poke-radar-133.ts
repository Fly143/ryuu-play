import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokRadar_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SF";
  public name: string = "Poké Radar";
  public fullName: string = "Poké Radar SF 133";
  public text: string = "Look at the top 5 cards of your deck, choose as many Pokémon as you like, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
