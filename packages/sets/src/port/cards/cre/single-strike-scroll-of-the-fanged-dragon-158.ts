import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SingleStrikeScrollOfTheFangedDragon_158 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRE";
  public name: string = "Single Strike Scroll of the Fanged Dragon";
  public fullName: string = "Single Strike Scroll of the Fanged Dragon CRE 158";
  public text: string = "The Single Strike Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
