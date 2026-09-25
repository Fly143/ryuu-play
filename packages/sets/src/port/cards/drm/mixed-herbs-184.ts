import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MixedHerbs_184 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRM";
  public name: string = "Mixed Herbs";
  public fullName: string = "Mixed Herbs DRM 184";
  public text: string = "You may play 2 Mixed Herbs cards at once. • If you played 1 card, remove a Special Condition from your Active Pokémon. • If you played 2 cards, heal 90 damage and remove all Special Conditions from your Active Pokémon. (This effects works one time for 2 cards.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
