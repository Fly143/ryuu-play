import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergySticker_159 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MEW";
  public name: string = "Energy Sticker";
  public fullName: string = "Energy Sticker MEW 159";
  public text: string = "Flip a coin. If heads, attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* attachBasicFromDiscardToBench */ state;
    }
    return state;
  }
}
