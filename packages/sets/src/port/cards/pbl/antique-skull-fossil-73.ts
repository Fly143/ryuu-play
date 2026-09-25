import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AntiqueSkullFossil_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PBL";
  public name: string = "Antique Skull Fossil";
  public fullName: string = "Antique Skull Fossil PBL 73";
  public text: string = "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat. At any time during your turn, you may discard this card from play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
