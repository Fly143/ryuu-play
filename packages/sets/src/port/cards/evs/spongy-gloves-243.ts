import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SpongyGloves_243 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EVS";
  public name: string = "Spongy Gloves";
  public fullName: string = "Spongy Gloves EVS 243";
  public text: string = "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Water Pokémon (before applying Weakness and Resistance). You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:30 */ state;
    }
    return state;
  }
}
