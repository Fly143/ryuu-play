import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AncientBoosterEnergyCapsule_140 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TEF";
  public name: string = "Ancient Booster Energy Capsule";
  public fullName: string = "Ancient Booster Energy Capsule TEF 140";
  public text: string = "The Ancient Pokémon this card is attached to gets +60 HP, recovers from all Special Conditions, and can't be affected by any Special Conditions. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
