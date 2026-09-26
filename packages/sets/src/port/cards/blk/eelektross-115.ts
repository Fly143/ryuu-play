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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Eelektross_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eelektrik";
  public hp: number = 160;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Thunder Fang", cost: [], damage: "60", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Buzz Flip", cost: [], damage: "100×", text: "Flip 4 coins. This attack does 100 damage for each heads." }
  ];
  public set: string = "BLK";
  public name: string = "Eelektross";
  public fullName: string = "Eelektross BLK 115";
  public text: string = "Eelektross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 100);
    }
    return state;
  }
}
