import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlunderPolicy_131 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FST";
  public name: string = "Blunder Policy";
  public fullName: string = "Blunder Policy FST 131";
  public text: string = "If the Pokémon this card is attached to uses an attack, if you flip any coins for the damage or effect of that attack, and if any of them are tails, draw 3 cards at the end of your turn. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
