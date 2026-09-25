import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Mela_236 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PAR";
  public name: string = "Mela";
  public fullName: string = "Mela PAR 236";
  public text: string = "You can use this card only if any of your Pokémon were Knocked Out during your opponent's last turn. Attach a Basic Fire Energy card from your discard pile to 1 of your Pokémon. If you do, draw cards until you have 6 cards in your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscard:1");
    }
    return state;
  }
}
