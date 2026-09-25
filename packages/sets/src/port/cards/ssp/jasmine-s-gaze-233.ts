import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JasmineSGaze_233 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SSP";
  public name: string = "Jasmine's Gaze";
  public fullName: string = "Jasmine's Gaze SSP 233";
  public text: string = "During your opponent's next turn, all of your Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). (This includes new Pokémon that come into play.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:30 */ state;
    }
    return state;
  }
}
