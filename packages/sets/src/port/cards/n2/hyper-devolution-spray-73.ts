import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HyperDevolutionSpray_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N2";
  public name: string = "Hyper Devolution Spray";
  public fullName: string = "Hyper Devolution Spray N2 73";
  public text: string = "Choose 1 of your evolved Pokémon. Take the highest Stage Evolution card from that Pokémon and put it into your hand. (You can't evolve a Pokémon the turn you devolve it.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
