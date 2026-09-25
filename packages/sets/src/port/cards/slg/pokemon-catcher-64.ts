import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCatcher_64 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SLG";
  public name: string = "Pokémon Catcher";
  public fullName: string = "Pokémon Catcher SLG 64";
  public text: string = "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipHeadsGustOpponent */ state;
    }
    return state;
  }
}
