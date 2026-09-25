import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GiovanniSCharisma_197 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MEW";
  public name: string = "Giovanni's Charisma";
  public fullName: string = "Giovanni's Charisma MEW 197";
  public text: string = "Put an Energy attached to your opponent's Active Pokémon into their hand. If you do, attach an Energy card from your hand to your Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
