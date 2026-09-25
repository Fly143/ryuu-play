import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SurfingBeach_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "MEG";
  public name: string = "Surfing Beach";
  public fullName: string = "Surfing Beach MEG 129";
  public text: string = "Once during each player's turn, that player may switch their Active Water Pokémon with 1 of their Benched Water Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
