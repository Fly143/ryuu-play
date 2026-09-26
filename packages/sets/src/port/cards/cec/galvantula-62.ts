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

export class Galvantula_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Joltik";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Live Wire", cost: [], damage: "", text: "This attack does 50 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Galvantula";
  public fullName: string = "Galvantula CEC 62";
  public text: string = "Galvantula";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
