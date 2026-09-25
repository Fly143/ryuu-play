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

export class Jolteon_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pin Missile", cost: [], damage: "20×", text: "Flip 4 coins. This attack does 20 damage times the number of heads." },
      { name: "Electri-Defuse", cost: [], damage: "40", text: "If the Defending Pokémon is a Pokémon-EX, that Pokémon can't attack during your opponent's next turn." }
  ];
  public set: string = "FLF";
  public name: string = "Jolteon";
  public fullName: string = "Jolteon FLF 34";
  public text: string = "Jolteon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "cantAttackIfEx");
    }
    return state;
  }
}
