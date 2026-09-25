import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BattleCompressorTeamFlareGear_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PHF";
  public name: string = "Battle Compressor Team Flare Gear";
  public fullName: string = "Battle Compressor Team Flare Gear PHF 92";
  public text: string = "Search your deck for up to 3 cards and discard them. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
