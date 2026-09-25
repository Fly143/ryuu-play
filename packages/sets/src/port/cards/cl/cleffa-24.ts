import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Cleffa_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sweet Sleeping Face", powerType: PowerType.ABILITY, text: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Eeeeeeek", cost: [], damage: "", text: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep." }
  ];
  public set: string = "CL";
  public name: string = "Cleffa";
  public fullName: string = "Cleffa CL 24";
  public text: string = "Cleffa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
