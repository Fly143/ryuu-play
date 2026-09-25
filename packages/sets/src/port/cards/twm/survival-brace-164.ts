import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SurvivalBrace_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TWM";
  public name: string = "Survival Brace";
  public fullName: string = "Survival Brace TWM 164";
  public text: string = "If the Pokémon this card is attached to has full HP and would be Knocked Out by damage from an attack from your opponent's Pokémon, it is not Knocked Out, and its remaining HP becomes 10. Then, discard this card. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
