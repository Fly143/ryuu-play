import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PotHelmet_146 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FST";
  public name: string = "Pot Helmet";
  public fullName: string = "Pot Helmet FST 146";
  public text: string = "If the Pokémon this card is attached to doesn't have a Rule Box, it takes 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). (Pokémon V, Pokémon-GX, etc. have Rule Boxes.) You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:30 */ state;
    }
    return state;
  }
}
