import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CynthiaSAmbition_178 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FST";
  public name: string = "Cynthia's Ambition";
  public fullName: string = "Cynthia's Ambition FST 178";
  public text: string = "Draw cards until you have 5 cards in your hand. If any of your Pokémon were Knocked Out during your opponent's last turn, draw cards until you have 8 cards in your hand instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 5);
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 8);
    }
    return state;
  }
}
