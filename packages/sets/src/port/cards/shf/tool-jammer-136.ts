import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ToolJammer_136 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SHF";
  public name: string = "Tool Jammer";
  public fullName: string = "Tool Jammer SHF 136";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. As long as the Pokémon this card is attached to is in the Active Spot, Pokémon Tools attached to your opponent's Active Pokémon have no effect, except for Tool Jammer. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
