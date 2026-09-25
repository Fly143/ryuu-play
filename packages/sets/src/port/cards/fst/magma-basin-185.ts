import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MagmaBasin_185 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "FST";
  public name: string = "Magma Basin";
  public fullName: string = "Magma Basin FST 185";
  public text: string = "Once during each player's turn, that player may attach a Fire Energy card from their discard pile to 1 of their Benched Fire Pokémon. If a player attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
