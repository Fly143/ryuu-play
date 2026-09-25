import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MinionOfTeamRocket_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Minion of Team Rocket";
  public fullName: string = "Minion of Team Rocket G1 113";
  public text: string = "Flip 2 coins. If both of them are heads, choose 1 of your opponent's Benched Pokémon and return it and all cards attached to it to his or her hand. If 1 or both of them are tails, your turn ends immediately (you can't attack this turn).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
