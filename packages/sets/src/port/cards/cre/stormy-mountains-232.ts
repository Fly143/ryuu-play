import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StormyMountains_232 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRE";
  public name: string = "Stormy Mountains";
  public fullName: string = "Stormy Mountains CRE 232";
  public text: string = "Once during each player's turn, that player may search their deck for a Basic Lightning Pokémon or Basic Dragon Pokémon and put it onto their Bench. Then, that player shuffles their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
