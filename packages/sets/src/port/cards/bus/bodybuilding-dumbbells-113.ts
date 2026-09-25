import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BodybuildingDumbbells_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BUS";
  public name: string = "Bodybuilding Dumbbells";
  public fullName: string = "Bodybuilding Dumbbells BUS 113";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Stage 1 Pokémon this card is attached to gets +40 HP. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
