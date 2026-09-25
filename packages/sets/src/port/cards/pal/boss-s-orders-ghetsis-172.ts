import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BossSOrdersGhetsis_172 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PAL";
  public name: string = "Boss's Orders (Ghetsis)";
  public fullName: string = "Boss's Orders (Ghetsis) PAL 172";
  public text: string = "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
