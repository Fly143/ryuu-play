import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProtectiveGoggles_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "MEW";
  public name: string = "Protective Goggles";
  public fullName: string = "Protective Goggles MEW 164";
  public text: string = "The Basic Pokémon this card is attached to has no Weakness. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
