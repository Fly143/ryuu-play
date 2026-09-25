import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UnderseaRuins_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "AQ";
  public name: string = "Undersea Ruins";
  public fullName: string = "Undersea Ruins AQ 138";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player chooses 1 of his or her Evolved Pokémon in play and discards the top Evolution card from that Pokémon, devolving it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
