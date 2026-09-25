import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VictoryPiece_130 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PLB";
  public name: string = "Victory Piece";
  public fullName: string = "Victory Piece PLB 130";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If this card is attached to Victini-EX, Victini-EX can use its attacks regardless of the amount or type of Energy attached to it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
