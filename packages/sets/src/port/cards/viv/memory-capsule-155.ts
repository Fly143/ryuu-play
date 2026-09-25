import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MemoryCapsule_155 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "VIV";
  public name: string = "Memory Capsule";
  public fullName: string = "Memory Capsule VIV 155";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Pokémon this card is attached to can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
