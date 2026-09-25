import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MysteriousShard_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CG";
  public name: string = "Mysterious Shard";
  public fullName: string = "Mysterious Shard CG 81";
  public text: string = "Attach Mysterious Shard to 1 of your Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Mysterious Shard is attached to is a Pokémon-ex, discard this card. Prevent all effects of attacks, including damage, done to the Pokémon that Mysterious Shard is attached to by your opponent's Pokémon-ex. Discard this card at the end of your opponent's next turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "preventEffectsSelf");
    }
    return state;
  }
}
