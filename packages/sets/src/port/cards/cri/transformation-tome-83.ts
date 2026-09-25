import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TransformationTome_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRI";
  public name: string = "Transformation Tome";
  public fullName: string = "Transformation Tome CRI 83";
  public text: string = "You must play 2 Transformation Tome cards at once. (This effect works one time for 2 cards.) Choose a Basic Pokémon in your discard pile and switch it with 1 of your Basic Pokémon in play. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
