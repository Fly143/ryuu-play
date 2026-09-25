import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MirageGate_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ASR";
  public name: string = "Mirage Gate";
  public fullName: string = "Mirage Gate ASR 163";
  public text: string = "You can use this card only if you have 7 or more cards in the Lost Zone. Search your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
