import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ArmorFossil_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MT";
  public name: string = "Armor Fossil";
  public fullName: string = "Armor Fossil MT 116";
  public text: string = "Play Armor Fossil as if it were a Colorless Basic Pokémon. (Armor Fossil counts as a Trainer card as well, but if Armor Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Armor Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Armor Fossil from play. (This doesn't count as a Knocked Out Pokémon.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
