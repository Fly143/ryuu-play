import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StrangeCave_77 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "LM";
  public name: string = "Strange Cave";
  public fullName: string = "Strange Cave LM 77";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, that player may put an Omanyte, Kabuto, Aerodactyl, Aerodactyl ex, Lileep, or Anorith onto his or her Bench from his or her hand. Treat the new Benched Pokémon as Basic Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
