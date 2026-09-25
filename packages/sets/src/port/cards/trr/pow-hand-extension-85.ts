import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PowHandExtension_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TRR";
  public name: string = "Pow! Hand Extension";
  public fullName: string = "Pow! Hand Extension TRR 85";
  public text: string = "You may use this card only if you have more Prize cards left than your opponent. Move 1 Energy card attached to the Defending Pokémon to another of your opponent's Pokémon. Or, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
