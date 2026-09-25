import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SkySealStone_143 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRZ";
  public name: string = "Sky Seal Stone";
  public fullName: string = "Sky Seal Stone CRZ 143";
  public text: string = "The Pokémon V this card is attached to can use the VSTAR Power on this card. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "oncePerGameDraw:1");
    }
    return state;
  }
}
