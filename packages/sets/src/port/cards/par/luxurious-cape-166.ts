import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LuxuriousCape_166 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PAR";
  public name: string = "Luxurious Cape";
  public fullName: string = "Luxurious Cape PAR 166";
  public text: string = "If the Pokémon this card is attached to doesn't have a Rule Box, it gets +100 HP, and if it is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 more Prize card. (Pokémon ex, Pokémon V, etc. have Rule Boxes.) You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
