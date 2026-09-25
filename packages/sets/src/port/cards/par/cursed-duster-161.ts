import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CursedDuster_161 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PAR";
  public name: string = "Cursed Duster";
  public fullName: string = "Cursed Duster PAR 161";
  public text: string = "If the Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, discard a random card from your opponent's hand. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
