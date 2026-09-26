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

export class PincurchinSV043 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shocking Needles", cost: [], damage: "30×", text: "Flip 4 coins. This attack does 30 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "SHF";
  public name: string = "Pincurchin";
  public fullName: string = "Pincurchin SHF SV043";
  public text: string = "Pincurchin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 30);
    }
    return state;
  }
}
