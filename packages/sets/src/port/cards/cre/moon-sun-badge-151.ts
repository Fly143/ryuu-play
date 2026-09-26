import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MoonSunBadge_151 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRE";
  public name: string = "Moon & Sun Badge";
  public fullName: string = "Moon & Sun Badge CRE 151";
  public text: string = "If the Pokémon V this card is attached to has \"Espeon\" or \"Umbreon\" in its name, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to that Pokémon. You may play any number of Item cards during your turn. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
