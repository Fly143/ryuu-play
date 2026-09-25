import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FightingStadium_90 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "FFI";
  public name: string = "Fighting Stadium";
  public fullName: string = "Fighting Stadium FFI 90";
  public text: string = "The attacks of each Fighting Pokémon in play (both yours and your opponent's) do 20 more damage to the Defending Pokémon-EX (before applying Weakness and Resistance). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
