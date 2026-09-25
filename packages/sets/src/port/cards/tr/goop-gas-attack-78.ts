import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GoopGasAttack_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "Goop Gas Attack";
  public fullName: string = "Goop Gas Attack TR 78";
  public text: string = "All Pokémon Powers stop working until the end of your opponent's next turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* noPowers */ state;
    }
    return state;
  }
}
