import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BufferPiece_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DR";
  public name: string = "Buffer Piece";
  public fullName: string = "Buffer Piece DR 83";
  public text: string = "Attach Buffer Piece to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Damage done to the Pokémon Buffer Piece is attached to by an opponent's attack is reduced by 20 (after applying Weakness and Resistance). At the end of your opponent's turn after you played Buffer Piece, discard Buffer Piece.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:20");
    }
    return state;
  }
}
