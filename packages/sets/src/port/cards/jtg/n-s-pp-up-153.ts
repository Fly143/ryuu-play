import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NSPPUp_153 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JTG";
  public name: string = "N's PP Up";
  public fullName: string = "N's PP Up JTG 153";
  public text: string = "Attach a Basic Energy card from your discard pile to 1 of your Benched N's Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
