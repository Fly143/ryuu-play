import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ParallelCity_145 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BKP";
  public name: string = "Parallel City";
  public fullName: string = "Parallel City BKP 145";
  public text: string = "Choose which way this card faces before you play it. This ↓ player can't have more than 3 Benched Pokémon. (When this card comes into play, this ↓ player discards Benched Pokémon until he or she has 3 Pokémon on the Bench.) Choose which way this card faces before you play it. Any damage done by attacks from this ↓ player's Grass, Fire, or Water Pokémon is reduced by 20 (before applying Weakness and Resistance). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
