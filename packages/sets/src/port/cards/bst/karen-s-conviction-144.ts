import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class KarenSConviction_144 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BST";
  public name: string = "Karen's Conviction";
  public fullName: string = "Karen's Conviction BST 144";
  public text: string = "During this turn, your Single Strike Pokémon's attacks do 20 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:20");
    }
    return state;
  }
}
