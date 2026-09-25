import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PlusPower_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UL";
  public name: string = "PlusPower";
  public fullName: string = "PlusPower UL 80";
  public text: string = "Attach PlusPower to 1 of your Pokémon. Discard this card at the end of your turn. If the Pokémon PlusPower is attached to attacks, the attack does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker */ state;
    }
    return state;
  }
}
