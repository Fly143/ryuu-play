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

export class ZacianV_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Piercing Strike", cost: [], damage: "40", text: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon." },
      { name: "Behemoth Blade", cost: [], damage: "100+", text: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 160 more damage." }
  ];
  public set: string = "CRZ";
  public name: string = "Zacian V";
  public fullName: string = "Zacian V CRZ 95";
  public text: string = "Zacian V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 160, 1);
    }
    return state;
  }
}
