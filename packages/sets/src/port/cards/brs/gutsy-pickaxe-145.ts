import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GutsyPickaxe_145 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BRS";
  public name: string = "Gutsy Pickaxe";
  public fullName: string = "Gutsy Pickaxe BRS 145";
  public text: string = "Reveal the top card of your deck. If that card is a Fighting Energy card, attach it to 1 of your Benched Pokémon. If it is not a Fighting Energy card, put it into your hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
