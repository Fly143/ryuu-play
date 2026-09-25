import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BebeSSearch_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SW";
  public name: string = "Bebe's Search";
  public fullName: string = "Bebe's Search SW 119";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose a card from your hand and put it on top of your deck. Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward. (If this is the only card in your hand, you can't play this card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
