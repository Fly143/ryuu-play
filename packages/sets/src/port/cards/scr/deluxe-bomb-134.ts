import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DeluxeBomb_134 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SCR";
  public name: string = "Deluxe Bomb";
  public fullName: string = "Deluxe Bomb SCR 134";
  public text: string = "If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 12 damage counters on the Attacking Pokémon. If you placed any damage counters in this way, discard this card. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* roughSkin */ state;
    }
    return state;
  }
}
