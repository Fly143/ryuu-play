import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StarPiece_139 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SK";
  public name: string = "Star Piece";
  public fullName: string = "Star Piece SK 139";
  public text: string = "Attach Star Piece to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to is Benched and has 2 or more damage counters on it, search your deck for an Evolution card that Pokémon evolves into and put it on top of that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. Then, discard Star Piece.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
