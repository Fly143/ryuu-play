import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NarrowGym_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "Narrow Gym";
  public fullName: string = "Narrow Gym G1 124";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. No player may have more than 4 Pokémon on his or her Bench. When this card is played, if a player has 5 Pokémon on his or her Bench, that player chooses 1 of them and returns it and all cards attached to it to his or her hand. (If both players have to return a Pokémon, your opponent returns a Pokémon first.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
