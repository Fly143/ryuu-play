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

export class Butterfree_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metapod";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whirlwind", cost: [], damage: "20", text: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon.)" },
      { name: "Mega Drain", cost: [], damage: "40", text: "Remove a number of damage counters from Butterfree equal of half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Butterfree has fewer damage counters that that, remove all of them." }
  ];
  public set: string = "G2";
  public name: string = "Butterfree";
  public fullName: string = "Butterfree G2 21";
  public text: string = "Butterfree";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "healHalfDamageDone");
    }
    return state;
  }
}
