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

export class MistySDewgong_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Seel";
  public hp: number = 80;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ice Throw", cost: [], damage: "20", text: "If the Defending Pokémon is Fighting, this attack's base damage is doubled." },
      { name: "Take Down", cost: [], damage: "60", text: "Misty's Dewgong does 20 damage to itself." }
  ];
  public set: string = "G2";
  public name: string = "Misty's Dewgong";
  public fullName: string = "Misty's Dewgong G2 54";
  public text: string = "Misty's Dewgong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
