import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Raihan_140 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRZ";
  public name: string = "Raihan";
  public fullName: string = "Raihan CRZ 140";
  public text: string = "You can play this card only if any of your Pokémon were Knocked Out during your opponent's last turn. Attach a basic Energy card from your discard pile to 1 of your Pokémon. If you do, search your deck for a card and put it into your hand. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
