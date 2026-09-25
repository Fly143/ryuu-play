import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSTrickery_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "UD";
  public name: string = "Team Rocket's Trickery";
  public fullName: string = "Team Rocket's Trickery UD 78";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 2 cards. Then, your opponent discards a card from his or her hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
