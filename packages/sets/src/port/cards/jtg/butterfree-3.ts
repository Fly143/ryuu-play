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

export class Butterfree_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metapod";
  public hp: number = 120;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scale Hurricane", cost: [], damage: "60×", text: "Flip 4 coins. This attack does 60 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "JTG";
  public name: string = "Butterfree";
  public fullName: string = "Butterfree JTG 3";
  public text: string = "Butterfree";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 60);
    }
    return state;
  }
}
