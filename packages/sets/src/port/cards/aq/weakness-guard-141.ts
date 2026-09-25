import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WeaknessGuard_141 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AQ";
  public name: string = "Weakness Guard";
  public fullName: string = "Weakness Guard AQ 141";
  public text: string = "Attach this card to 1 of your Pokémon. Discard it at the end of your opponent's next turn. As long as this card is attached, this Pokémon has no Weakness.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
