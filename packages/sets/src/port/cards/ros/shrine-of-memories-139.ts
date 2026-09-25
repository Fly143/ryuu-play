import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ShrineOfMemories_139 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ROS";
  public name: string = "Shrine of Memories";
  public fullName: string = "Shrine of Memories ROS 139";
  public text: string = "Each player's evolved Pokémon can use any attack from its previous Evolutions. (That player still needs the necessary Energy to use each attack.) This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
