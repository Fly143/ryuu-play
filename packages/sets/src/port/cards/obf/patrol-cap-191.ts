import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PatrolCap_191 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "OBF";
  public name: string = "Patrol Cap";
  public fullName: string = "Patrol Cap OBF 191";
  public text: string = "As long as the Pokémon this card is attached to is in the Active Spot, cards in your deck can't be discarded by effects of your opponent's attacks, Abilities, Item cards, Pokémon Tool cards, or Supporter cards. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
