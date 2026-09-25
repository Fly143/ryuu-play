import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyCoin_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BLK";
  public name: string = "Energy Coin";
  public fullName: string = "Energy Coin BLK 81";
  public text: string = "Flip 2 coins. If both of them are heads, search your deck for a Basic Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
