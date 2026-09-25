import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BrookletHill_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "GRI";
  public name: string = "Brooklet Hill";
  public fullName: string = "Brooklet Hill GRI 120";
  public text: string = "Once during each player's turn, that player may search their deck for a Basic Water Pokémon or Basic Fighting Pokémon and, put it onto their Bench, and shuffle their deck. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
