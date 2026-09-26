import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Yanmega_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yanma";
  public hp: number = 90;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sonic Wave", cost: [], damage: "10", text: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Pursue and Turn", cost: [], damage: "60+", text: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage and switch Yanmega with 1 of your Benched Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Yanmega";
  public fullName: string = "Yanmega SF 17";
  public text: string = "Yanmega";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
