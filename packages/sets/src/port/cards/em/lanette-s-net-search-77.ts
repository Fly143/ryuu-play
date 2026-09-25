import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LanetteSNetSearch_77 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EM";
  public name: string = "Lanette's Net Search";
  public fullName: string = "Lanette's Net Search EM 77";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 3 different types of Basic Pokémon cards (excluding Baby Pokémon), show them to your opponent, and put them into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
