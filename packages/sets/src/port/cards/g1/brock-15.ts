import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Brock_15 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Brock";
  public fullName: string = "Brock G1 15";
  public text: string = "Remove 1 damage counter from each of your Pokémon that has any damage counters on it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, 10);
    }
    return state;
  }
}
