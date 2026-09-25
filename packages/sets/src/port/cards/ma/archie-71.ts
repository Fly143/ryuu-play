import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Archie_71 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MA";
  public name: string = "Archie";
  public fullName: string = "Archie MA 71";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Pokémon with Team Aqua in its name and put it onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as a Basic Pokémon. If it is a Stage 2 Pokémon, put 2 damage counters on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
