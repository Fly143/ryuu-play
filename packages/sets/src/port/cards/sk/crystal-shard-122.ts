import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrystalShard_122 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SK";
  public name: string = "Crystal Shard";
  public fullName: string = "Crystal Shard SK 122";
  public text: string = "Attach Crystal Shard to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as this card is attached to a Pokémon, that Pokémon's type (color) is Colorless. If that Pokémon attacks, discard this card at the end of the turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
