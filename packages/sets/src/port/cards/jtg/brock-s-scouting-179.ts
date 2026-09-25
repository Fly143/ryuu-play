import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BrockSScouting_179 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "JTG";
  public name: string = "Brock's Scouting";
  public fullName: string = "Brock's Scouting JTG 179";
  public text: string = "Search your deck for up to 2 Basic Pokémon or 1 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:2");
    }
    return state;
  }
}
