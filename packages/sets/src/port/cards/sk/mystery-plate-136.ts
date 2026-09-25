import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MysteryPlate_136 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SK";
  public name: string = "Mystery Plate δ";
  public fullName: string = "Mystery Plate δ SK 136";
  public text: string = "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Mystery Plate δ.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
