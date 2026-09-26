import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullFaceGuard_231 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRE";
  public name: string = "Full Face Guard";
  public fullName: string = "Full Face Guard CRE 231";
  public text: string = "If the Pokémon this card is attached to has no Abilities, it takes 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:20");
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
