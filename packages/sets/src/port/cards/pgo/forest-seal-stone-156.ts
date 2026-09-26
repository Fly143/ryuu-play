import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ForestSealStone_156 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PGO";
  public name: string = "Forest Seal Stone";
  public fullName: string = "Forest Seal Stone PGO 156";
  public text: string = "The Pokémon V this card is attached to can use the VSTAR Power on this card. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "oncePerGameDraw:1");
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
