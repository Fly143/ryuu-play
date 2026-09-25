import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LevelBall_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SHF";
  public name: string = "Level Ball";
  public fullName: string = "Level Ball SHF 129";
  public text: string = "Search your deck for a Pokémon with 90 HP or less, reveal it, and put it into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
