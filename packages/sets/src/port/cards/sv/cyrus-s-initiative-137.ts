import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CyrusSInitiative_137 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SV";
  public name: string = "Cyrus's Initiative";
  public fullName: string = "Cyrus's Initiative SV 137";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip 2 coins. If either of them is heads, look at your opponent's hand. For each heads, choose 1 card from your opponent's hand and put it on the bottom of your opponent's deck in any order.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
