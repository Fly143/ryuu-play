import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SpellTag_235 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DRM";
  public name: string = "Spell Tag";
  public fullName: string = "Spell Tag DRM 235";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. When the Psychic Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, put 4 damage counters on your opponent's Pokémon in any way you like. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
