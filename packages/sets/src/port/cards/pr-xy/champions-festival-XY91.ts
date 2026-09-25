import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChampionsFestivalXY91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PR-XY";
  public name: string = "Champions Festival";
  public fullName: string = "Champions Festival PR-XY XY91";
  public text: string = "Once during each player's turn, if that player has 6 Pokémon in play, he or she may heal 10 damage from each of his or her Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, 10);
    }
    return state;
  }
}
