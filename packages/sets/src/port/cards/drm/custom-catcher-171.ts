import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CustomCatcher_171 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRM";
  public name: string = "Custom Catcher";
  public fullName: string = "Custom Catcher DRM 171";
  public text: string = "You may play 2 Custom Catcher cards at once. • If you played 1 card, draw cards until you have 3 cards in your hand. • If you played 2 cards, switch 1 of your opponent's Benched Pokémon with their Active Pokémon. (This effects works one time for 2 cards.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect);
    }
    return state;
  }
}
