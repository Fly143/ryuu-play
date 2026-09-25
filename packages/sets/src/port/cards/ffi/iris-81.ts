import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Iris_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FFI";
  public name: string = "Iris";
  public fullName: string = "Iris FFI 81";
  public text: string = "During this turn, your Pokémon's attacks do 10 more damage to the Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:10 */ state;
    }
    return state;
  }
}
