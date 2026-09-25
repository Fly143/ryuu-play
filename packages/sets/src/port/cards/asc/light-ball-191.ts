import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LightBall_191 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "ASC";
  public name: string = "Light Ball";
  public fullName: string = "Light Ball ASC 191";
  public text: string = "Attacks used by the Pikachu ex this card is attached to do 50 more damage to your opponent's Active Pokémon ex (before applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
