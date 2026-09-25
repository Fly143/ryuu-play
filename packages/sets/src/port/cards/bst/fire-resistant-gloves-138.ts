import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FireResistantGloves_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BST";
  public name: string = "Fire-Resistant Gloves";
  public fullName: string = "Fire-Resistant Gloves BST 138";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Fire Pokémon (before applying Weakness and Resistance). You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
