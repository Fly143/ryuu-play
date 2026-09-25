import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AreaZeroUnderdepths_174 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SCR";
  public name: string = "Area Zero Underdepths";
  public fullName: string = "Area Zero Underdepths SCR 174";
  public text: string = "Each player who has any Tera Pokémon in play can have up to 8 Pokémon on their Bench. If a player no longer has any Tera Pokémon in play, that player discards Pokémon from their Bench until they have 5. When this card leaves play, both players discard Pokémon from their Bench until they have 5, and the player who played this card discards first.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
