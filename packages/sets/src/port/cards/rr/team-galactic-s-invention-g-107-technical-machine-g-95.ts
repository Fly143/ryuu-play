import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamGalacticSInventionG107TechnicalMachineG_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "RR";
  public name: string = "Team Galactic's Invention G-107 Technical Machine G";
  public fullName: string = "Team Galactic's Invention G-107 Technical Machine G RR 95";
  public text: string = "Attach this card to 1 of your Pokémon SP in play. That Pokémon may use this card's attack instead of its own. When the Pokémon this card is attached to is no longer Pokémon SP, discard this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
