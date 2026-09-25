import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CursedStone_72 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "LM";
  public name: string = "Cursed Stone";
  public fullName: string = "Cursed Stone LM 72";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. At any time between turns, each player puts 1 damage counter on his or her Pokémon that has a Poké-Power.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
