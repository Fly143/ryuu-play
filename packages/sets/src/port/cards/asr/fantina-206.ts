import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Fantina_206 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASR";
  public name: string = "Fantina";
  public fullName: string = "Fantina ASR 206";
  public text: string = "You can use this card only if you have 10 or more cards in the Lost Zone. During your opponent's next turn, all of your Pokémon take 120 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance). (This includes Pokémon that come into play during that turn.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:120 */ state;
    }
    return state;
  }
}
