import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LuckyEgg_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AR";
  public name: string = "Lucky Egg";
  public fullName: string = "Lucky Egg AR 88";
  public text: string = "Attach Lucky Egg to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. When the Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, draw cards until you have 7 cards in your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 7);
    }
    return state;
  }
}
