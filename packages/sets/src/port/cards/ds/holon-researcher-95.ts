import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HolonResearcher_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DS";
  public name: string = "Holon Researcher";
  public fullName: string = "Holon Researcher DS 95";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard a card from your hand. If you can't discard a card from your hand, you can't play this card. Search your deck for a Metal Energy card or a Basic Pokémon (or Evolution card) that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
