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

export class Snorlax_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bedhead", powerType: PowerType.ABILITY, text: "As long as Snorlax remains Asleep between turns, put 2 damage counters on 1 of the Defending Pokémon.", useWhenInPlay: true },
      { name: "Dozing", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Snorlax is your Active Pokémon, you may remove 2 damage counters from Snorlax and Snorlax is now Asleep. This power can't be used if Snorlax is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "DF";
  public name: string = "Snorlax δ";
  public fullName: string = "Snorlax δ DF 10";
  public text: string = "Snorlax δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[1]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    return state;
  }
}
