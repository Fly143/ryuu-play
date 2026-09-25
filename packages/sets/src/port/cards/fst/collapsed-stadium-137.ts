import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CollapsedStadium_137 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "FST";
  public name: string = "Collapsed Stadium";
  public fullName: string = "Collapsed Stadium FST 137";
  public text: string = "Each player can't have more than 4 Benched Pokémon. If a player has 5 or more Benched Pokémon, they discard Benched Pokémon until they have 4 Pokémon on the Bench. The player who played this card discards first. If more than one effect changes the number of Benched Pokémon allowed, use the smaller number.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
