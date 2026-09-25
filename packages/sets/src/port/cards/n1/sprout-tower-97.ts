import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SproutTower_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N1";
  public name: string = "Sprout Tower";
  public fullName: string = "Sprout Tower N1 97";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. All damage done by Colorless Pokémon's attacks is reduced by 30 (after applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
