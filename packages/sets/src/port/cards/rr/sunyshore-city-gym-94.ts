import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SunyshoreCityGym_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "RR";
  public name: string = "Sunyshore City Gym";
  public fullName: string = "Sunyshore City Gym RR 94";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Any damage done by attacks from Lightning Pokémon (both yours and your opponent's) to the Defending Pokémon isn't affected by Resistance. Each Lightning Pokémon in play (both yours and your opponent's) has no Weakness.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
