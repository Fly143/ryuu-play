import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LillieSPokDoll_267 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEC";
  public name: string = "Lillie's Poké Doll";
  public fullName: string = "Lillie's Poké Doll CEC 267";
  public text: string = "Play this card as if it were a 30-HP Colorless Basic Pokémon. At any time during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard all cards from it and put it on the bottom of your deck. This card can't retreat. If this card is Knocked Out, your opponent can't take any Prize cards for it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
