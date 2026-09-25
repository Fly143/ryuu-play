import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ImposterOakSRevenge_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "Imposter Oak's Revenge";
  public fullName: string = "Imposter Oak's Revenge TR 76";
  public text: string = "Discard a card from your hand in order to play this card. Your opponent shuffles his or her hand into his or her deck, then draws 4 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* opponentShuffleDraw:4 */ state;
    }
    return state;
  }
}
