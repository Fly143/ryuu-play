import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EXPALL_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "N4";
  public name: string = "EXP.ALL";
  public fullName: string = "EXP.ALL N4 93";
  public text: string = "Attach EXP.ALL to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. During your opponent's turn, if your Active Pokémon would be Knocked Out by your opponent's attack, you may take 1 of the basic Energy cards attached to your Active Pokémon and attach it to the Pokémon with EXP.ALL attached to it. If you do, discard EXP.ALL.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
