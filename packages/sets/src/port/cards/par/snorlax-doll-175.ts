import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SnorlaxDoll_175 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PAR";
  public name: string = "Snorlax Doll";
  public fullName: string = "Snorlax Doll PAR 175";
  public text: string = "If this card is in your hand when you are setting up to play, you may put it face down in the Active Spot or on your Bench as if it were a 120-HP Basic Colorless Pokémon. (You can do this only when you are setting up to play.) At any time during your turn, you may discard this card from play. This card can't be affected by any Special Conditions and can't retreat. If this card is Knocked Out, your opponent can't take any Prize cards for it. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
