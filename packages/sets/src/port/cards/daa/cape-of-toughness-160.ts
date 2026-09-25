import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CapeOfToughness_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DAA";
  public name: string = "Cape of Toughness";
  public fullName: string = "Cape of Toughness DAA 160";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Basic Pokémon this card is attached to gets +50 HP, except Pokémon-GX. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
