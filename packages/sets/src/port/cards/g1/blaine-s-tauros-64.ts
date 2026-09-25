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

export class BlaineSTauros_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "3-Pronged Tail", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." },
      { name: "Full Speed Charge", cost: [], damage: "20×", text: "Flip 4 coins. This attack does 20 damage times the number of heads to the Defending Pokémon and 20 damage times the number of tails to Blaine's Tauros." }
  ];
  public set: string = "G1";
  public name: string = "Blaine's Tauros";
  public fullName: string = "Blaine's Tauros G1 64";
  public text: string = "Blaine's Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 20);
    }
    return state;
  }
}
