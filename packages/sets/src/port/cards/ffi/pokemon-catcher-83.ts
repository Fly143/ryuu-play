import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCatcher_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FFI";
  public name: string = "Pokémon Catcher";
  public fullName: string = "Pokémon Catcher FFI 83";
  public text: string = "Switch your opponent's Active Pokémon with 1 of his or her Benched Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipHeadsGustOpponent */ state;
    }
    return state;
  }
}
