import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CirchesterBath_150 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "VIV";
  public name: string = "Circhester Bath";
  public fullName: string = "Circhester Bath VIV 150";
  public text: string = "All Basic Pokémon (both yours and your opponent's) take 20 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance). This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:20");
    }
    return state;
  }
}
