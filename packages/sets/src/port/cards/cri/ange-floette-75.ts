import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AngeFloette_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRI";
  public name: string = "Ange Floette";
  public fullName: string = "Ange Floette CRI 75";
  public text: string = "You can put this card into play only if you discard a Prism Tower in play, and you can put this card into play during the same turn you play Prism Tower. Each Mega Floette ex in play (both yours and your opponent's) gets +150 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
