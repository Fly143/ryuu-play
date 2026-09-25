import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DangerousDrill_192 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNB";
  public name: string = "Dangerous Drill";
  public fullName: string = "Dangerous Drill UNB 192";
  public text: string = "You can play this card only if you discard a Darkness Pokémon from your hand. Discard a Pokémon Tool or Special Energy card from 1 of your opponent's Pokémon, or discard any Stadium card in play. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardStadium");
    }
    return state;
  }
}
