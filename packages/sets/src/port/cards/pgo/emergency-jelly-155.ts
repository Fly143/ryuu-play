import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EmergencyJelly_155 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PGO";
  public name: string = "Emergency Jelly";
  public fullName: string = "Emergency Jelly PGO 155";
  public text: string = "At the end of each turn, if the Pokémon this card is attached to has 30 HP or less remaining and has any damage counters on it, heal 120 damage from it. If you healed any damage in this way, discard this card. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
