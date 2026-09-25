import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TargetWhistleTeamFlareGear_106 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PHF";
  public name: string = "Target Whistle Team Flare Gear";
  public fullName: string = "Target Whistle Team Flare Gear PHF 106";
  public text: string = "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
