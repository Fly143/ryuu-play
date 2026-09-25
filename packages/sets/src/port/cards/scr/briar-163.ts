import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Briar_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SCR";
  public name: string = "Briar";
  public fullName: string = "Briar SCR 163";
  public text: string = "You can use this card only if your opponent has exactly 2 Prize cards remaining. During this turn, if your opponent's Active Pokémon is Knocked Out by damage from an attack used by your Tera Pokémon, take 1 more Prize card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
