import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrystalWall_139 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PLS";
  public name: string = "Crystal Wall";
  public fullName: string = "Crystal Wall PLS 139";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If this card is attached to Black Kyurem-EX, its maximum HP is 300. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
