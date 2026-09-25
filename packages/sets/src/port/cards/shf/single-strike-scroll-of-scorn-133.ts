import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SingleStrikeScrollOfScorn_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SHF";
  public name: string = "Single Strike Scroll of Scorn";
  public fullName: string = "Single Strike Scroll of Scorn SHF 133";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Single Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
