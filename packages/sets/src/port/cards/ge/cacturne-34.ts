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

export class Cacturne_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cacnea";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pin Missile", cost: [], damage: "20×", text: "Flip 3 coins. This attack does 20 damage times the number of heads." },
      { name: "Needle Arm", cost: [], damage: "50+", text: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "GE";
  public name: string = "Cacturne";
  public fullName: string = "Cacturne GE 34";
  public text: string = "Cacturne";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 20);
    }
    return state;
  }
}
