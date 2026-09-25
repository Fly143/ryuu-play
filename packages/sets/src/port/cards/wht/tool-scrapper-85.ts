import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ToolScrapper_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "WHT";
  public name: string = "Tool Scrapper";
  public fullName: string = "Tool Scrapper WHT 85";
  public text: string = "Choose up to 2 Pokémon Tools attached to Pokémon (yours or your opponent's) and discard them. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
