import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MarySImpulse_142 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EX";
  public name: string = "Mary's Impulse";
  public fullName: string = "Mary's Impulse EX 142";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip a coin until you get tails. For each heads, draw 2 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
