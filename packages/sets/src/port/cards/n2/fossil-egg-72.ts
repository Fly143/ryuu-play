import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FossilEgg_72 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N2";
  public name: string = "Fossil Egg";
  public fullName: string = "Fossil Egg N2 72";
  public text: string = "Flip a coin. If heads, search your deck for a card that evolves from Mysterious Fossil and put it onto your Bench or put a card that evolves from Mysterious Fossil from your hand onto your Bench. Either way, treat the new card as a Basic Pokémon. If you searched your deck, shuffle it. (You can't play this card if your Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
