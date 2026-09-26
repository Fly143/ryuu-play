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

export class Kangaskhan_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cross-Cut", cost: [], damage: "30+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage." },
      { name: "Hurricane Punch", cost: [], damage: "50×", text: "Flip 4 coins. This attack does 50 damage for each heads." }
  ];
  public set: string = "SUM";
  public name: string = "Kangaskhan";
  public fullName: string = "Kangaskhan SUM 99";
  public text: string = "Kangaskhan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 50);
    }
    return state;
  }
}
