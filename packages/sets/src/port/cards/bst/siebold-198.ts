import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Siebold_198 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BST";
  public name: string = "Siebold";
  public fullName: string = "Siebold BST 198";
  public text: string = "Choose up to 2 of your Rapid Strike Pokémon and heal 60 damage from each of them.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, 60);
    }
    return state;
  }
}
