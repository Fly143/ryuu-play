import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ExpShare_174 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SVI";
  public name: string = "Exp. Share";
  public fullName: string = "Exp. Share SVI 174";
  public text: string = "When your Active Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may move a Basic Energy from that Pokémon to the Pokémon this card is attached to. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
