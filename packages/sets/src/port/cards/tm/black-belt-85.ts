import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlackBelt_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "TM";
  public name: string = "Black Belt";
  public fullName: string = "Black Belt TM 85";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. You may use this card only if you have more Prize cards left than your opponent. During this turn, each of your Active Pokémon's attacks does 40 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:40 */ state;
    }
    return state;
  }
}
