import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class KogaSNinjaTrick_115 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Koga's Ninja Trick";
  public fullName: string = "Koga's Ninja Trick G2 115";
  public text: string = "Attach Koga's Ninja Trick to your Active Pokémon with Koga in its name. If this Pokémon goes to your Bench, discard this card. When your opponent attacks, you may switch this Pokémon with 1 of your Benched Pokémon (before damage or other effects of attacks).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
