import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RareCandy_100 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRX";
  public name: string = "Rare Candy";
  public fullName: string = "Rare Candy DRX 100";
  public text: string = "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.) You can't use this card during your first turn or on a Basic Pokémon that was put into play this turn. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "rareCandy");
    }
    return state;
  }
}
