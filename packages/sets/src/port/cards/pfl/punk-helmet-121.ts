import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PunkHelmet_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PFL";
  public name: string = "Punk Helmet";
  public fullName: string = "Punk Helmet PFL 121";
  public text: string = "If the Darkness Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), place 4 damage counters on the Attacking Pokémon. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* roughSkin */ state;
    }
    return state;
  }
}
