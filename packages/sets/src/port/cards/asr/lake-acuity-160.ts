import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LakeAcuity_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ASR";
  public name: string = "Lake Acuity";
  public fullName: string = "Lake Acuity ASR 160";
  public text: string = "All Pokémon that have any Water or Fighting Energy attached (both yours and your opponent's) take 20 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:20 */ state;
    }
    return state;
  }
}
