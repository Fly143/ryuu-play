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

export class Charmeleon_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmander";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Scratch", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 damage times the number of heads." },
      { name: "Flamethrower", cost: [], damage: "50", text: "Discard 1 Fire Energy card attached to Charmeleon." }
  ];
  public set: string = "EX";
  public name: string = "Charmeleon";
  public fullName: string = "Charmeleon EX 73";
  public text: string = "Charmeleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 20);
    }
    return state;
  }
}
