import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonBreeder_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SLG";
  public name: string = "Pokémon Breeder";
  public fullName: string = "Pokémon Breeder SLG 73";
  public text: string = "Draw 2 cards and heal 20 damage from your Active Pokémon. If you have no cards in your deck, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 20);
    }
    return state;
  }
}
