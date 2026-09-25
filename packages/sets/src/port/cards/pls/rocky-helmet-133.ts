import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RockyHelmet_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PLS";
  public name: string = "Rocky Helmet";
  public fullName: string = "Rocky Helmet PLS 133";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is your Active Pokémon and is damage by an opponent's attack (even if that Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "roughSkin");
    }
    return state;
  }
}
