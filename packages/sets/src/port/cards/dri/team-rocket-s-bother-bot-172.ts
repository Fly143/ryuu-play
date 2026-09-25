import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSBotherBot_172 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRI";
  public name: string = "Team Rocket's Bother-Bot";
  public fullName: string = "Team Rocket's Bother-Bot DRI 172";
  public text: string = "Turn 1 of your opponent's face-down Prize cards face up and choose a random card from your opponent's hand. Your opponent reveals that card. You may have your opponent switch those cards. (That Prize card remains face up for the rest of the game.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
