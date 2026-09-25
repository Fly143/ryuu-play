import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ErikaSPerfume_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Erika's Perfume";
  public fullName: string = "Erika's Perfume G1 110";
  public text: string = "Look at your opponent's hand. If he or she has any Basic Pokémon cards there, you may put any number of them onto your opponent's Bench (as long as there's room).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
