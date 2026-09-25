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

export class Coalossal_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Carkol";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Coal Cannon", cost: [], damage: "90×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 90 damage for each heads." },
      { name: "Wild Tackle", cost: [], damage: "200", text: "This Pokémon also does 50 damage to itself." }
  ];
  public set: string = "SHF";
  public name: string = "Coalossal";
  public fullName: string = "Coalossal SHF 80";
  public text: string = "Coalossal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 90);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
