import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BenchShield_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AR";
  public name: string = "Bench Shield";
  public fullName: string = "Bench Shield AR 83";
  public text: string = "Attach Bench Shield to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as the Pokémon this card is attached to is on your Bench, prevent all damage done to that Pokémon by attacks (both yours and your opponent's).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
