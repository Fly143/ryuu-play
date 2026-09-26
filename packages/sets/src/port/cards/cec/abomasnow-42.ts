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

export class Abomasnow_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snover";
  public hp: number = 140;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Freeze", cost: [], damage: "70", text: "If your opponent's Active Pokémon has any Water Energy attached to it, it is now Paralyzed." },
      { name: "Wild Tackle", cost: [], damage: "140", text: "This Pokémon does 20 damage to itself." }
  ];
  public set: string = "CEC";
  public name: string = "Abomasnow";
  public fullName: string = "Abomasnow CEC 42";
  public text: string = "Abomasnow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
