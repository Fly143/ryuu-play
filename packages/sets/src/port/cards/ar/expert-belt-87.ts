import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ExpertBelt_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AR";
  public name: string = "Expert Belt";
  public fullName: string = "Expert Belt AR 87";
  public text: string = "Attach Expert Belt to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. The Pokémon this card is attached to gets +20 HP and that Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). When the Pokémon this card is attached to is Knocked Out, your opponent takes 1 more Prize card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
