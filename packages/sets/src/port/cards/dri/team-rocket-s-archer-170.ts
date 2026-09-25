import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSArcher_170 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRI";
  public name: string = "Team Rocket's Archer";
  public fullName: string = "Team Rocket's Archer DRI 170";
  public text: string = "You can use this card only if any of your Team Rocket's Pokémon were Knocked Out during your opponent's last turn. Each player shuffles their hand into their deck. Then, you draw 5 cards, and your opponent draws 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "bothShuffleDraw:4");
    }
    return state;
  }
}
