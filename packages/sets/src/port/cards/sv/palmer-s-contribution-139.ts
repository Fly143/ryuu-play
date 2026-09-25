import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PalmerSContribution_139 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SV";
  public name: string = "Palmer's Contribution";
  public fullName: string = "Palmer's Contribution SV 139";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your discard pile for up to 5 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
