import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaSGreatBall_31 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DCR";
  public name: string = "Team Magma's Great Ball";
  public fullName: string = "Team Magma's Great Ball DCR 31";
  public text: string = "Search your deck for a Basic Team Magma Pokémon and a basic Fighting Energy card, reveal them, and put them into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
