import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class QuadStone_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PGO";
  public name: string = "Quad Stone";
  public fullName: string = "Quad Stone PGO 163";
  public text: string = "You may use 4 Quad Stone cards at once. • If you used 1 card, heal 10 damage from your Active Pokémon. • If you used 4 cards, heal all damage from each of your Pokémon. (This effect works one time for 4 cards.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 10);
    }
    return state;
  }
}
