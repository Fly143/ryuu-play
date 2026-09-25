import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RoseanneSBackup_172 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FST";
  public name: string = "Roseanne's Backup";
  public fullName: string = "Roseanne's Backup FST 172";
  public text: string = "Choose 1 or more: • Shuffle a Pokémon from your discard pile into your deck. • Shuffle a Pokémon Tool card from your discard pile into your deck. • Shuffle a Stadium card from your discard pile into your deck. • Shuffle an Energy card from your discard pile into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:2");
    }
    return state;
  }
}
