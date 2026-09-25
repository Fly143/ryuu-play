import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySCeruleanCityGym_61 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HIF";
  public name: string = "Misty's Cerulean City Gym";
  public fullName: string = "Misty's Cerulean City Gym HIF 61";
  public text: string = "The attacks of Starmie-GX (both yours and your opponent's) do 40 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
