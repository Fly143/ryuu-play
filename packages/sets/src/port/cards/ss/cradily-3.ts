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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Cradily_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lileep";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Super Suction Cups", powerType: PowerType.ABILITY, text: "As long as Cradily is your Active Pokémon, your opponent's Pokémon can't retreat.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lure Poison", cost: [], damage: "", text: "Before using this effect, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon, if any. The Defending Pokémon is now Poisoned." },
      { name: "Spiral Drain", cost: [], damage: "50", text: "Remove 2 damage counters from Cradily (remove 1 if there is only 1)." }
  ];
  public set: string = "SS";
  public name: string = "Cradily";
  public fullName: string = "Cradily SS 3";
  public text: string = "Cradily";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
