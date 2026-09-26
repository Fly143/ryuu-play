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

export class Poliwhirl_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwag";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rain Splash", cost: [], damage: "20", text: "" },
      { name: "Finishing Blow", cost: [], damage: "50+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 50 more damage." }
  ];
  public set: string = "FFI";
  public name: string = "Poliwhirl";
  public fullName: string = "Poliwhirl FFI 16";
  public text: string = "Poliwhirl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
