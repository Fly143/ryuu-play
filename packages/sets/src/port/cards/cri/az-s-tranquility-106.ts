import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AZSTranquility_106 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRI";
  public name: string = "AZ's Tranquility";
  public fullName: string = "AZ's Tranquility CRI 106";
  public text: string = "Switch your Active Pokémon with 1 of your Benched Pokémon. If you moved a Pokémon ex to your Bench in this way, heal 80 damage from that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
