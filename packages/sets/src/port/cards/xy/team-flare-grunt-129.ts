import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamFlareGrunt_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "XY";
  public name: string = "Team Flare Grunt";
  public fullName: string = "Team Flare Grunt XY 129";
  public text: string = "Discard an Energy attached to your opponent's Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
    }
    return state;
  }
}
