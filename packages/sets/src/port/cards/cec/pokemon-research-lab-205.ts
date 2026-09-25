import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonResearchLab_205 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CEC";
  public name: string = "Pokémon Research Lab";
  public fullName: string = "Pokémon Research Lab CEC 205";
  public text: string = "Once during each player's turn, that player may search their deck for up to 2 Pokémon that evolve from Unidentified Fossil, put those Pokémon onto their Bench, and shuffle their deck. If a player searches their deck in this way, their turn ends. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
