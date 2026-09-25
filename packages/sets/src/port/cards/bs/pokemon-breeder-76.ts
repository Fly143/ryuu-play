import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonBreeder_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Pokémon Breeder";
  public fullName: string = "Pokémon Breeder BS 76";
  public text: string = "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
