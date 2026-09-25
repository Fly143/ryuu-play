import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ReverseValley_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "GEN";
  public name: string = "Reverse Valley";
  public fullName: string = "Reverse Valley GEN 110";
  public text: string = "Choose which way this card faces before you play it. Any damage done to this ↓ player's Metal Pokémon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance). Choose which way this card faces before you play it. The attacks of this ↓ player's Darkness Pokémon do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
