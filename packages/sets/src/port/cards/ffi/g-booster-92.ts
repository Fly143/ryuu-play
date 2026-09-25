import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GBooster_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FFI";
  public name: string = "G Booster";
  public fullName: string = "G Booster FFI 92";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Genesect-EX this card is attached to can also use the attack on this card. (You still need the necessary Energy to use this attack.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
