import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SupereffectiveGlasses_152 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BRS";
  public name: string = "Supereffective Glasses";
  public fullName: string = "Supereffective Glasses BRS 152";
  public text: string = "When applying Weakness to damage from the attacks of the Pokémon this card is attached to done to your opponent's Active Pokémon, apply it as ×3. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
