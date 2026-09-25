import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FossilQuarry_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PBL";
  public name: string = "Fossil Quarry";
  public fullName: string = "Fossil Quarry PBL 76";
  public text: string = "Once during each player's turn, that player may search their deck for up to 2 Item cards that have \"Antique\" in their name and put them onto their Bench. Then, that player shuffles their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
