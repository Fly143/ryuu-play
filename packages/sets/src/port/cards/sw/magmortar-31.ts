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

export class Magmortar_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magmar";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flame Body", powerType: PowerType.ABILITY, text: "When you attach a Fire Energy card from your hand to Magmortar, remove 2 damage counters from Magmortar.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Blast", cost: [], damage: "20×", text: "Does 20 damage times the number of Fire Energy attached to Magmortar." },
      { name: "Fireball Bazooka", cost: [], damage: "40", text: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SW";
  public name: string = "Magmortar";
  public fullName: string = "Magmortar SW 31";
  public text: string = "Magmortar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
