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

export class Grotle_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Turtwig";
  public hp: number = 120;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cut", cost: [], damage: "20", text: "" },
      { name: "Ramming Shell", cost: [], damage: "50", text: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "TEF";
  public name: string = "Grotle";
  public fullName: string = "Grotle TEF 11";
  public text: string = "Grotle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
