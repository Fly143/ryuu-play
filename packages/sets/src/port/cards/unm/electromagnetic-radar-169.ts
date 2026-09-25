import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ElectromagneticRadar_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNM";
  public name: string = "Electromagnetic Radar";
  public fullName: string = "Electromagnetic Radar UNM 169";
  public text: string = "You can play this card only if you discard 2 other cards from your hand. Search your deck for up to 2 in any combination of Lightning Pokémon-GX and Lightning Pokémon-EX, reveal them, and put them into your hand. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
