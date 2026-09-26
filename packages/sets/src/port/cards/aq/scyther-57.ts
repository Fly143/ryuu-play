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

export class Scyther_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Turn", cost: [], damage: "10×", text: "Flip 2 coins. This attack does 10 damage times the number of heads." },
      { name: "Cross-Cut", cost: [], damage: "20+", text: "If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage." }
  ];
  public set: string = "AQ";
  public name: string = "Scyther";
  public fullName: string = "Scyther AQ 57";
  public text: string = "Scyther";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 10);
    }
    return state;
  }
}
