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

export class Dubwool_154 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wooloo";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cotton Guard", cost: [], damage: "30", text: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Double-Edge", cost: [], damage: "120", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "SSH";
  public name: string = "Dubwool";
  public fullName: string = "Dubwool SSH 154";
  public text: string = "Dubwool";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
