import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeroSMedal_201 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "VIV";
  public name: string = "Hero's Medal";
  public fullName: string = "Hero's Medal VIV 201";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The Pokémon VMAX this card is attached to gets -100 HP, and if it is Knocked Out by damage from an attack from your opponent's Pokémon, that player takes 1 fewer Prize card. You can't attach this card to a Pokémon VMAX that has 100 HP or less remaining. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
