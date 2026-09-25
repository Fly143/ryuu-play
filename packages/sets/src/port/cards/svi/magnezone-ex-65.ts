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

export class MagnezoneEx_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Crush", cost: [], damage: "50×", text: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon." },
      { name: "Pulse Launcher", cost: [], damage: "220", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "SVI";
  public name: string = "Magnezone ex";
  public fullName: string = "Magnezone ex SVI 65";
  public text: string = "Magnezone ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
