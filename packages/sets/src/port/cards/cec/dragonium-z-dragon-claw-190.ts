import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DragoniumZDragonClaw_190 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CEC";
  public name: string = "Dragonium Z: Dragon Claw";
  public fullName: string = "Dragonium Z: Dragon Claw CEC 190";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to has the Dragon Claw attack, it can use the GX attack on this card. (You still need the necessary Energy to use this attack.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
