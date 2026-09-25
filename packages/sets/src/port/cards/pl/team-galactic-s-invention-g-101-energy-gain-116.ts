import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamGalacticSInventionG101EnergyGain_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PL";
  public name: string = "Team Galactic's Invention G-101 Energy Gain";
  public fullName: string = "Team Galactic's Invention G-101 Energy Gain PL 116";
  public text: string = "Attach Team Galactic's Invention G-101 Energy Gain to 1 of your Pokémon SP that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. When the Pokémon this card is attached to is no longer a Pokémon SP, discard this card. As long as Team Galactic's Invention G-101 Energy Gain is attached to a Pokémon, the attack cost of that Pokémon's attacks is Colorless less.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
