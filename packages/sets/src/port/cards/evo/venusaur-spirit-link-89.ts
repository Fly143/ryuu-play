import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VenusaurSpiritLink_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "EVO";
  public name: string = "Venusaur Spirit Link";
  public fullName: string = "Venusaur Spirit Link EVO 89";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Your turn does not end if the Pokémon this card is attached to becomes M Venusaur-EX. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
