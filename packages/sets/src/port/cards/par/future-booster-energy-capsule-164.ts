import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FutureBoosterEnergyCapsule_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PAR";
  public name: string = "Future Booster Energy Capsule";
  public fullName: string = "Future Booster Energy Capsule PAR 164";
  public text: string = "The Future Pokémon this card is attached to has no Retreat Cost, and the attacks it uses do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
