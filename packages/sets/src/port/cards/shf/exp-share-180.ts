import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ExpShare_180 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SHF";
  public name: string = "Exp. Share";
  public fullName: string = "Exp. Share SHF 180";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. When your Active Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move a Basic Energy from that Pokémon to the Pokémon this card is attached to. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
