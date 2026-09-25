import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonTower_42 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BP";
  public name: string = "Pokémon Tower";
  public fullName: string = "Pokémon Tower BP 42";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If the effect of a Pokémon Power, attack, Energy card, or Trainer card would put a card in a discard pile into its owner's hand, that card stays in that discard pile instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
