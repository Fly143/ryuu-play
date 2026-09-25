import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Powerglass_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SFA";
  public name: string = "Powerglass";
  public fullName: string = "Powerglass SFA 97";
  public text: string = "At the end of your turn (after your attack), if the Pokémon this card is attached to is in the Active Spot, you may attach a Basic Energy card from your discard pile to it. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
