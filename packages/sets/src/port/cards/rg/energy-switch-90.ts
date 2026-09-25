import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergySwitch_90 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RG";
  public name: string = "Energy Switch";
  public fullName: string = "Energy Switch RG 90";
  public text: string = "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* moveEnergyBetweenMine */ state;
    }
    return state;
  }
}
