import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChoiceBand_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "GRI";
  public name: string = "Choice Band";
  public fullName: string = "Choice Band GRI 121";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Pokémon-GX or Active Pokémon-EX (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
