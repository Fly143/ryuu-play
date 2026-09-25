import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OgreSMask_159 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TWM";
  public name: string = "Ogre's Mask";
  public fullName: string = "Ogre's Mask TWM 159";
  public text: string = "Choose a Pokémon ex in your discard pile that has \"Ogerpon\" in its name, and switch it with 1 of your Pokémon ex in play that has \"Ogerpon\" in its name. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
