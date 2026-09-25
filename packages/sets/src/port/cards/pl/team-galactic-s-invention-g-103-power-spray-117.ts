import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamGalacticSInventionG103PowerSpray_117 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PL";
  public name: string = "Team Galactic's Invention G-103 Power Spray";
  public fullName: string = "Team Galactic's Invention G-103 Power Spray PL 117";
  public text: string = "You may play this card during your opponent's turn when your opponent's Pokémon uses any Poké-Power. Prevent all effects of that Poké-Power. (This counts as that Pokémon using its Poké-Power.) If you have 2 or less Pokémon SP in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
