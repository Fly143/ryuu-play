import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorKukui_148 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SUM";
  public name: string = "Professor Kukui";
  public fullName: string = "Professor Kukui SUM 148";
  public text: string = "Draw 2 cards. During this turn, your Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:20");
    }
    return state;
  }
}
