import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LeafyCamoPoncho_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PGO";
  public name: string = "Leafy Camo Poncho";
  public fullName: string = "Leafy Camo Poncho PGO 160";
  public text: string = "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to the Pokémon VSTAR or Pokémon VMAX this card is attached to. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
