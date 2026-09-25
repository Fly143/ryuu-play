import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PicnicBasket_184 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SVI";
  public name: string = "Picnic Basket";
  public fullName: string = "Picnic Basket SVI 184";
  public text: string = "Heal 30 damage from each Pokémon (both yours and your opponent's). You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
