import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RapidStrikeScrollOfSwirls_131 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SHF";
  public name: string = "Rapid Strike Scroll of Swirls";
  public fullName: string = "Rapid Strike Scroll of Swirls SHF 131";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Rapid Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
