import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySWaterCommand_63 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Misty's Water Command";
  public fullName: string = "Misty's Water Command HIF 63";
  public text: string = "Move any number of Water Energy from your Pokémon to your Psyduck, Horsea, Staryu, Starmie-GX, Magikarp, Gyarados, or Lapras in any way you like.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
