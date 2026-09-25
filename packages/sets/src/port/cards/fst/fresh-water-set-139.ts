import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FreshWaterSet_139 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FST";
  public name: string = "Fresh Water Set";
  public fullName: string = "Fresh Water Set FST 139";
  public text: string = "Heal 20 damage from each of your Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
