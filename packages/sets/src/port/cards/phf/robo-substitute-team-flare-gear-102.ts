import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RoboSubstituteTeamFlareGear_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PHF";
  public name: string = "Robo Substitute Team Flare Gear";
  public fullName: string = "Robo Substitute Team Flare Gear PHF 102";
  public text: string = "Play this card as if it were a 30 HP Colorless Basic Pokémon. At any time during your turn (before your attack), you may discard this card from play. This card can't retreat. If this card is Knocked Out, your opponent can't take any Prize Cards for it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
