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

export class Klinklang_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Klang";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heavy Bumper", powerType: PowerType.ABILITY, text: "Any damage done to this Pokémon by an opponent's attack is reduced by 10 for each Colorless in your opponent's Active Pokémon's Retreat Cost (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gear Spinner", cost: [], damage: "70", text: "During your next turn, this Pokémon's Gear Spinner attack does 70 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "STS";
  public name: string = "Klinklang";
  public fullName: string = "Klinklang STS 73";
  public text: string = "Klinklang";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    return state;
  }
}
