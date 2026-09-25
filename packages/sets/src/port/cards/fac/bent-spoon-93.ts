import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BentSpoon_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FAC";
  public name: string = "Bent Spoon";
  public fullName: string = "Bent Spoon FAC 93";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Prevent all effects of your opponent's attacks, except damage, done to the Pokémon this card is attached to. (Existing effects are not removed.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
