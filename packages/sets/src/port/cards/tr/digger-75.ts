import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Digger_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "Digger";
  public fullName: string = "Digger TR 75";
  public text: string = "Flip a coin. If tails, do 10 damage to your Active Pokémon. If heads, your opponent flips a coin. If tails, your opponent does 10 damage to his or her Active Pokémon. If heads, you flip a coin. Keep doing this until a player gets tails.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipHeadsSelfDamage:10 */ state;
    }
    return state;
  }
}
