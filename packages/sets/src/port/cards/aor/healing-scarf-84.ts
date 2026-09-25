import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HealingScarf_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AOR";
  public name: string = "Healing Scarf";
  public fullName: string = "Healing Scarf AOR 84";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Whenever you attach an Energy card from your hand to the Pokémon this card is attached to, heal 20 damage from it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "healSelfAfterAttack:20");
    }
    return state;
  }
}
