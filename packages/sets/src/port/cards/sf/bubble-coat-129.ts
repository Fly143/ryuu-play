import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BubbleCoat_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SF";
  public name: string = "Bubble Coat";
  public fullName: string = "Bubble Coat SF 129";
  public text: string = "Attach Bubble Coat to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. As long as Bubble Coat is attached to a Pokémon, that Pokémon has no Weakness. If that Pokémon is damaged by an opponent's attack, discard this card at the end of the turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "roughSkin");
    }
    return state;
  }
}
