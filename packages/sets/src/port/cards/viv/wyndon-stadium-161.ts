import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WyndonStadium_161 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "VIV";
  public name: string = "Wyndon Stadium";
  public fullName: string = "Wyndon Stadium VIV 161";
  public text: string = "Whenever either player plays a Pokémon VMAX from their hand to evolve a Pokémon V during their turn, heal 100 damage from that Pokémon. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
