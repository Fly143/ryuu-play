import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ScoopUpNet_165 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RCL";
  public name: string = "Scoop Up Net";
  public fullName: string = "Scoop Up Net RCL 165";
  public text: string = "Put 1 of your Pokémon that isn't a Pokémon V or a Pokémon-GX into your hand. (Discard all attached cards.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
