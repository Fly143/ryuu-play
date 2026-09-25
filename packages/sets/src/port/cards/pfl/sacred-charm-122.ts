import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SacredCharm_122 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PFL";
  public name: string = "Sacred Charm";
  public fullName: string = "Sacred Charm PFL 122";
  public text: string = "The Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon that have an Ability (after applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:30 */ state;
    }
    return state;
  }
}
