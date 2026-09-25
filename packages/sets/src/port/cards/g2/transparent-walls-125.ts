import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TransparentWalls_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Transparent Walls";
  public fullName: string = "Transparent Walls G2 125";
  public text: string = "Until the end of your opponent's next turn, prevent all damage from attacks done to your Benched Pokémon. (Any other effects of attacks still happen.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
