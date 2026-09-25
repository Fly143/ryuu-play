import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCatcher_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRZ";
  public name: string = "Pokémon Catcher";
  public fullName: string = "Pokémon Catcher CRZ 138";
  public text: string = "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipHeadsGustOpponent */ state;
    }
    return state;
  }
}
