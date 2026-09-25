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

export class DuskManeNecrozmaSM124 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dusk Shot", cost: [], damage: "", text: "This attack does 60 damage to 1 of your opponent's Pokémon-GX or Pokémon-EX. This damage isn't affected by Weakness or Resistance." },
      { name: "Rusty Claws", cost: [], damage: "100+", text: "If your opponent has exactly 1 Prize card remaining, this attack does 100 more damage." }
  ];
  public set: string = "PR-SM";
  public name: string = "Dusk Mane Necrozma";
  public fullName: string = "Dusk Mane Necrozma PR-SM SM124";
  public text: string = "Dusk Mane Necrozma";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
