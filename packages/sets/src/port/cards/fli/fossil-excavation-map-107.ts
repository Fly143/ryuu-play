import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FossilExcavationMap_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLI";
  public name: string = "Fossil Excavation Map";
  public fullName: string = "Fossil Excavation Map FLI 107";
  public text: string = "Choose 1: • Search your deck for an Unidentified Fossil card, reveal it, and put it into your hand. Then, shuffle your deck. • Put an Unidentified Fossil card from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
