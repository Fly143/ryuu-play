import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Misty_182 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "30C";
  public name: string = "Misty";
  public fullName: string = "Misty 30C 18";
  public text: string = "Discard 2 of the other cards in your hand in order to play this card. If this turn's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has Misty in its name, the attack does 20 more damage to the Defending Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
