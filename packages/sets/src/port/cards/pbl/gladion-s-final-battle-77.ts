import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GladionSFinalBattle_77 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PBL";
  public name: string = "Gladion's Final Battle";
  public fullName: string = "Gladion's Final Battle PBL 77";
  public text: string = "You can use this card only when it is the last card in your hand. During this turn, attacks used by your Pokémon that don't have a Rule Box do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). (Pokémon ex, Pokémon V_atk, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:80");
    }
    return state;
  }
}
