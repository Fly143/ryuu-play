import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MasterBall_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PK";
  public name: string = "Master Ball";
  public fullName: string = "Master Ball PK 78";
  public text: string = "Look at the top 7 cards from your deck. Choose a Basic Pokémon or Evolution card from those cards, show it to your opponent, and put it into your hand. Put the other 6 cards back on top of your deck. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
