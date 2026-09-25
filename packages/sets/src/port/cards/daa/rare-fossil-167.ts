import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RareFossil_167 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DAA";
  public name: string = "Rare Fossil";
  public fullName: string = "Rare Fossil DAA 167";
  public text: string = "Play this card as if it were a 70-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can't be affected by any Special Conditions, and it can't retreat. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
