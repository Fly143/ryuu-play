import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokBall_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RG";
  public name: string = "Poké Ball";
  public fullName: string = "Poké Ball RG 95";
  public text: string = "Flip a coin. If heads, search your deck for a Basic Pokémon or Evolution card, show it to your opponent and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
