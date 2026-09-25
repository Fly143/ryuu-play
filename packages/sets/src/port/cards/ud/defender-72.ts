import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Defender_72 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UD";
  public name: string = "Defender";
  public fullName: string = "Defender UD 72";
  public text: string = "Attach Defender to 1 of your Pokémon. Discard this card at the end of your opponent's next turn. Any damage done to the Pokémon Defender is attached to by an opponent's attack is reduced by 20 (after applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:20 */ state;
    }
    return state;
  }
}
