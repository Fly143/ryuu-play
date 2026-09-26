import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CessationCrystal_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CG";
  public name: string = "Cessation Crystal";
  public fullName: string = "Cessation Crystal CG 74";
  public text: string = "Attach Cessation Crystal to 1 of your Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Cessation Crystal is attached to is a Pokémon-ex, discard this card. As long as Cessation Crystal is attached to an Active Pokémon, each player's Pokémon (both yours and your opponent's) can't use any Poké-Powers or Poké-Bodies.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "noPowers");
    }
    return state;
  }
}
