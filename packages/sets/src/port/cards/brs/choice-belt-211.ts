import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChoiceBelt_211 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BRS";
  public name: string = "Choice Belt";
  public fullName: string = "Choice Belt BRS 211";
  public text: string = "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Pokémon V (before applying Weakness and Resistance). You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
