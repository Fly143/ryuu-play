import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSchemer_69 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MA";
  public name: string = "Team Aqua Schemer";
  public fullName: string = "Team Aqua Schemer MA 69";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard any 1 Pokémon from your hand. Then draw 3 cards. If you discarded a Pokémon with Team Aqua in its name, draw 4 cards instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
