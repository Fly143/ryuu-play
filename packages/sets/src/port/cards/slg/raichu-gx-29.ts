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

export class RaichuGX_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Powerful Spark", cost: [], damage: "20+", text: "This attack does 20 more damage times the amount of Lightning Energy attached to your Pokémon." },
      { name: "Thunder", cost: [], damage: "160", text: "This Pokémon does 30 damage to itself." },
      { name: "Voltail-GX", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SLG";
  public name: string = "Raichu-GX";
  public fullName: string = "Raichu-GX SLG 29";
  public text: string = "Raichu-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
