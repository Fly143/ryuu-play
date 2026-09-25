import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MartialArtsDojo_179 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "UNM";
  public name: string = "Martial Arts Dojo";
  public fullName: string = "Martial Arts Dojo UNM 179";
  public text: string = "The attacks of non-Ultra Beast Pokémon that have any basic Fighting Energy attached to them (both yours and your opponent's) do 10 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance). If the attacking player has more Prize cards remaining than their opponent, those attacks do 40 more damage instead. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
