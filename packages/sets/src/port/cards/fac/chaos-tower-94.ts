import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChaosTower_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "FAC";
  public name: string = "Chaos Tower";
  public fullName: string = "Chaos Tower FAC 94";
  public text: string = "Choose which way this card faces before you play it. This ↓ player's Pokémon can't be Confused or Poisoned. (If those Pokémon are already Confused or Poisoned, remove those Special Conditions.) Choose which way this card faces before you play it. This ↓ player's Pokémon can't be Asleep or Paralyzed. (If those Pokémon are already Asleep or Paralyzed, remove those Special Conditions.) This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
