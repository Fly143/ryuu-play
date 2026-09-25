import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonPark_131 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "AQ";
  public name: string = "Pokémon Park";
  public fullName: string = "Pokémon Park AQ 131";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each of his or her turns, whenever a player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter, if any, from that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
