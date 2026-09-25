import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CursedShovel_157 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "RCL";
  public name: string = "Cursed Shovel";
  public fullName: string = "Cursed Shovel RCL 157";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. If the Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, discard the top 2 cards of your opponent's deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
