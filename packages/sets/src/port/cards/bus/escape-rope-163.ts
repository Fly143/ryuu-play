import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EscapeRope_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BUS";
  public name: string = "Escape Rope";
  public fullName: string = "Escape Rope BUS 163";
  public text: string = "Each player switches their Active Pokémon with 1 of their Benched Pokémon. Your opponent switches first. (If a player does not have a Benched Pokémon, that player doesn't switch Pokémon.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
