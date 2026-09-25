import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DynaTreeHill_135 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BST";
  public name: string = "Dyna Tree Hill";
  public fullName: string = "Dyna Tree Hill BST 135";
  public text: string = "Pokémon (both yours and your opponent's) can't be healed. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
