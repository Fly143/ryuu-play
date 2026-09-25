import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BrockSTraining_55 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Brock's Training";
  public fullName: string = "Brock's Training HIF 55";
  public text: string = "Attach an Energy card from your hand to 1 of your Geodude, Graveler, Golem, Onix-GX, Cubone, Rhyhorn, Rhydon, or Sudowoodo.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
