import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeroSCape_152 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TEF";
  public name: string = "Hero's Cape";
  public fullName: string = "Hero's Cape TEF 152";
  public text: string = "The Pokémon this card is attached to gets +100 HP. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
