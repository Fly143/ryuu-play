import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamGalacticSInventionG109SPRadar_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RR";
  public name: string = "Team Galactic's Invention G-109 SP Radar";
  public fullName: string = "Team Galactic's Invention G-109 SP Radar RR 96";
  public text: string = "Choose a card from your hand and put it on top of your deck. Search your deck for a Pokémon SP, show it to your opponent, and put it into your hand. Shuffle your deck afterward. (If this is the only card in your hand, you can't play this card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
