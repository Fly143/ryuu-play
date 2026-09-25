import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JammingNetTeamFlareHyperGear_98 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PHF";
  public name: string = "Jamming Net Team Flare Hyper Gear";
  public fullName: string = "Jamming Net Team Flare Hyper Gear PHF 98";
  public text: string = "Attach this Pokemon Tool to 1 of your opponent's Pokemon-EX that doesn't already have a Pokemon Tool attached to it. The attacks of the Pokémon this card is attached to do 20 less damage to all Defending Pokémon (before applying Weakness and Resistance). (Don't apply Weakness and Resistance for Benched Pokémon.) When this card is removed from a Pokémon for any reason, put this card in its owner's discard pile. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
