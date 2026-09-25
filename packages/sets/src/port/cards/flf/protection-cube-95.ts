import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProtectionCube_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FLF";
  public name: string = "Protection Cube";
  public fullName: string = "Protection Cube FLF 95";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Prevent all damage done to the Pokémon this card is attached to by attacks it uses. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
