import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FairyCharmDragon_177 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DRM";
  public name: string = "Fairy Charm Dragon";
  public fullName: string = "Fairy Charm Dragon DRM 177";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Prevent all damage done to the Fairy Pokémon this card is attached to by attacks from your opponent's Dragon Pokémon-GX and Dragon Pokémon-EX. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "preventEffectsMarker");
    }
    return state;
  }
}
