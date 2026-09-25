import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ExpShare_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "ROS";
  public name: string = "Exp. Share";
  public fullName: string = "Exp. Share ROS 128";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. When your Active Pokémon is Knocked Out by damage from an opponent's attack, you may move 1 basic Energy card that was attached to that Pokémon to the Pokémon this card is attached to. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
