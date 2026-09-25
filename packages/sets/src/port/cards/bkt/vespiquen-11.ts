import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Vespiquen_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Double", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 2 Pokémon Tool cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bee Drain", cost: [], damage: "20", text: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon." },
      { name: "Fury Swipes", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "BKT";
  public name: string = "Vespiquen";
  public fullName: string = "Vespiquen BKT 11";
  public text: string = "Vespiquen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
