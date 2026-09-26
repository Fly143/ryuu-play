import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CounterattackClaws_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "N4";
  public name: string = "Counterattack Claws";
  public fullName: string = "Counterattack Claws N4 97";
  public text: string = "Attach Counterattack Claws to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. During your opponent's turn, if the Pokémon Counterattack Claws is attached to is your Active Pokémon and an opponent's attack damages it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard Counterattack Claws.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
