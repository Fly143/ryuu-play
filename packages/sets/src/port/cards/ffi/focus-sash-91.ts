import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FocusSash_91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FFI";
  public name: string = "Focus Sash";
  public fullName: string = "Focus Sash FFI 91";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Fighting Pokémon this card is attached to has full HP and would be Knocked Out by damage from an opponent's attack, that Pokémon is not Knocked Out and its remaining HP becomes 10 instead. Then, discard this card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
