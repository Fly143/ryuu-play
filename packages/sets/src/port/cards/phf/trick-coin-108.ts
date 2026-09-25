import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TrickCoin_108 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PHF";
  public name: string = "Trick Coin";
  public fullName: string = "Trick Coin PHF 108";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Once during your turn, after you flip any coins for an attack of the Pokémon this card is attached to, you may ignore all effects of those coin flips and begin flipping those coins again. (You may only use effects that let you flip coins again, including effects from other cards, once during your turn.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
