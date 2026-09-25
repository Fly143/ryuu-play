import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSGreatBall_27 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DCR";
  public name: string = "Team Aqua's Great Ball";
  public fullName: string = "Team Aqua's Great Ball DCR 27";
  public text: string = "Search your deck for a Basic Team Aqua Pokémon and a basic Water Energy card, reveal them, and put them into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
