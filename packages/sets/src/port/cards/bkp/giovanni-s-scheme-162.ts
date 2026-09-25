import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GiovanniSScheme_162 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BKP";
  public name: string = "Giovanni's Scheme";
  public fullName: string = "Giovanni's Scheme BKP 162";
  public text: string = "Choose 1: • Draw cards until you have 5 cards in your hand. • During this turn, your Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:20");
    }
    return state;
  }
}
