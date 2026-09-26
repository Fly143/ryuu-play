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

export class Maushold_158 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tandemaus";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Familial March", cost: [], damage: "", text: "Search your deck for up to 2 in any combination of Maushold and Maushold ex and put them onto your Bench. Then, shuffle your deck." },
      { name: "Incessant Incisors", cost: [], damage: "30×", text: "Flip 4 coins. This attack does 30 damage for each heads." }
  ];
  public set: string = "SSP";
  public name: string = "Maushold";
  public fullName: string = "Maushold SSP 158";
  public text: string = "Maushold";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 30);
    }
    return state;
  }
}
