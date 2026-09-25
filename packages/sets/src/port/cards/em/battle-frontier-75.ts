import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BattleFrontier_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "EM";
  public name: string = "Battle Frontier";
  public fullName: string = "Battle Frontier EM 75";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player's Colorless Evolved Pokémon, Darkness Evolved Pokémon, and Metal Evolved Pokémon can't use any Poké-Powers or Poké-Bodies.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
