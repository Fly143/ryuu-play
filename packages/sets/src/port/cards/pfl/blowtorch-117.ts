import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Blowtorch_117 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PFL";
  public name: string = "Blowtorch";
  public fullName: string = "Blowtorch PFL 117";
  public text: string = "You can use this card only if you discard a Basic Fire Energy card from your hand. Discard a Pokémon Tool or Special Energy card from 1 of your opponent's Pokémon, or discard a Stadium in play. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
