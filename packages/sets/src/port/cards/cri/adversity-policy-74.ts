import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AdversityPolicy_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CRI";
  public name: string = "Adversity Policy";
  public fullName: string = "Adversity Policy CRI 74";
  public text: string = "If the Pokémon this card is attached to has Weakness to your opponent's Active Pokémon's type, is in the Active Spot, and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* roughSkin */ state;
    }
    return state;
  }
}
