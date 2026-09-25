import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PlusPower_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "PlusPower";
  public fullName: string = "PlusPower JU 113";
  public text: string = "Attach PlusPower to your Active Pokémon. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker");
    }
    return state;
  }
}
