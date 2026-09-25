import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ToolScrapper_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BCR";
  public name: string = "Tool Scrapper";
  public fullName: string = "Tool Scrapper BCR 116";
  public text: string = "Choose up to 2 Pokémon Tool cards attached to Pokémon in play (yours or your opponent's) and discard them. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
