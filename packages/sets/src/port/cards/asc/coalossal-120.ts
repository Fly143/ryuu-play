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

export class Coalossal_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carkol";
  public hp: number = 180;
    public height?: number = 2.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tar Cannon", cost: [], damage: "", text: "This attack does 140 damage to 1 of your opponent's Pokémon. If you don't have 10 or more Basic Fighting Energy cards in your discard pile, this attack does nothing. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Bulky Bump", cost: [], damage: "220", text: "Discard 3 Energy from this Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Coalossal";
  public fullName: string = "Coalossal ASC 120";
  public text: string = "Coalossal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
