import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BalloonBerry_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DX";
  public name: string = "Balloon Berry";
  public fullName: string = "Balloon Berry DX 84";
  public text: string = "Attach Balloon Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as Balloon Berry is attached to a Pokémon, that Pokémon's Retreat Cost is 0. When this Pokémon retreats, discard Balloon Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
