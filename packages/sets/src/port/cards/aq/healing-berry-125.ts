import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HealingBerry_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Healing Berry";
  public fullName: string = "Healing Berry AQ 125";
  public text: string = "Attach Healing Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool card attached to it. If that Pokémon is Knocked Out, discard this card. At the end of any turn, if the Pokémon this card is attached to has 20 HP or less, remove 3 damage counters from that Pokémon and discard this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
