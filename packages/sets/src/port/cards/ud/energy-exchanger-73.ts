import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyExchanger_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UD";
  public name: string = "Energy Exchanger";
  public fullName: string = "Energy Exchanger UD 73";
  public text: string = "Choose an Energy card from your hand, show it to your opponent, and put it on top of your deck. Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
