import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSAriana_171 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRI";
  public name: string = "Team Rocket's Ariana";
  public fullName: string = "Team Rocket's Ariana DRI 171";
  public text: string = "Draw cards until you have 5 cards in your hand. If all of your Pokémon in play are Team Rocket's Pokémon, draw cards until you have 8 cards in your hand instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
