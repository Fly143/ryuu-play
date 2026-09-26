import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AmuletCoin_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "GE";
  public name: string = "Amulet Coin";
  public fullName: string = "Amulet Coin GE 97";
  public text: string = "Attach Amulet Coin to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. If the Pokémon Amulet Coin is attached to is your Active Pokémon at the end of your turn, draw a card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
