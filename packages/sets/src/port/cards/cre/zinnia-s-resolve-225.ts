import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ZinniaSResolve_225 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRE";
  public name: string = "Zinnia's Resolve";
  public fullName: string = "Zinnia's Resolve CRE 225";
  public text: string = "You can play this card only if you discard 2 other cards from your hand. Draw a card for each of your opponent's Pokémon in play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
