import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CyrusSConspiracy_105 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PL";
  public name: string = "Cyrus's Conspiracy";
  public fullName: string = "Cyrus's Conspiracy PL 105";
  public text: string = "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a Supporter card, a basic Energy card, and a Trainer card that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
