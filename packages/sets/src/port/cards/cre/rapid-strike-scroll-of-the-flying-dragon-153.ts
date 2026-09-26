import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RapidStrikeScrollOfTheFlyingDragon_153 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRE";
  public name: string = "Rapid Strike Scroll of the Flying Dragon";
  public fullName: string = "Rapid Strike Scroll of the Flying Dragon CRE 153";
  public text: string = "The Rapid Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
