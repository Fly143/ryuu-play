import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Defender_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Defender";
  public fullName: string = "Defender BS 80";
  public text: string = "Attach Defender to 1 of your Pokémon. At the end of your opponent's next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageMarker:20 */ state;
    }
    return state;
  }
}
