import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaBall_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MA";
  public name: string = "Team Magma Ball";
  public fullName: string = "Team Magma Ball MA 80";
  public text: string = "Flip a coin. If heads, search your deck for a Pokémon that has Team Magma in its name, show it to your opponent, and put it into your hand. If tails, search your deck for a Basic Pokémon that has Team Magma in its name, show it to your opponent and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
