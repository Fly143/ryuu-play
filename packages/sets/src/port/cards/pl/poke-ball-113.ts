import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokBall_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PL";
  public name: string = "Poké Ball";
  public fullName: string = "Poké Ball PL 113";
  public text: string = "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
