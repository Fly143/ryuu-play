import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyLink_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PL";
  public name: string = "Energy Link";
  public fullName: string = "Energy Link PL 83";
  public text: string = "Attach Energy Link to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as Energy Link is attached to a Pokémon, you may move an Energy card attached to that Pokémon to another of your Pokémon that has Energy Link attached to it. You may use this effect as often as you like during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "energyTrans");
    }
    return state;
  }
}
