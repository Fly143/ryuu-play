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

export class Electabuzz_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Light Screen", cost: [], damage: "", text: "Whenever an attack does damage to Electabuzz (after applying Weakness and Resistance) during your opponent's next turn, that attack only does half the damage to Electabuzz (rounded down to the nearest 10). (Any other effects of attacks still happen.)" },
      { name: "Quick Attack", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage." }
  ];
  public set: string = "BP";
  public name: string = "Electabuzz";
  public fullName: string = "Electabuzz BP 2";
  public text: string = "Electabuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 999);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
