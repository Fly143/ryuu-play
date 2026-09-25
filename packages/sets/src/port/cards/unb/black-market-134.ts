import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlackMarket_134 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "UNB";
  public name: string = "Black Market ◇";
  public fullName: string = "Black Market ◇ UNB 134";
  public text: string = "When a Darkness Pokémon (yours or your opponent's) that has any Darkness Energy attached to it is Knocked Out by damage from an opponent's attack, that player takes 1 fewer Prize card. Whenever any player plays an Item or Supporter card from their hand, prevent all effects of that card done to this Stadium card. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. ◇ (Prism Star) Rule: You can't have more than 1 ◇ card with the same name in your deck. If a ◇ card would go to the discard pile, put it in the Lost Zone instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
