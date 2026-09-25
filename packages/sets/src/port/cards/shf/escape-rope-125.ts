import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EscapeRope_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SHF";
  public name: string = "Escape Rope";
  public fullName: string = "Escape Rope SHF 125";
  public text: string = "Each player switches their Active Pokémon with 1 of their Benched Pokémon. Your opponent switches first. (If a player does not have a Benched Pokémon, they don't switch Pokémon.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
