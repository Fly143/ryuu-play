import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DefianceBand_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SVI";
  public name: string = "Defiance Band";
  public fullName: string = "Defiance Band SVI 169";
  public text: string = "If you have more Prize cards remaining than your opponent, the attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
