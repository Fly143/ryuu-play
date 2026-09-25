import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RustSyndicateGrunt_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PBL";
  public name: string = "Rust Syndicate Grunt";
  public fullName: string = "Rust Syndicate Grunt PBL 81";
  public text: string = "You can use this card only if any of your Pokémon were Knocked Out during your opponent's last turn. Discard an Energy from 1 of your opponent's Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
