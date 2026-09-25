import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FossilExcavationKit_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FAC";
  public name: string = "Fossil Excavation Kit";
  public fullName: string = "Fossil Excavation Kit FAC 101";
  public text: string = "Put 2 in any combination of Helix Fossil Omanyte, Dome Fossil Kabuto, or Old Amber Aerodactyl cards from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
