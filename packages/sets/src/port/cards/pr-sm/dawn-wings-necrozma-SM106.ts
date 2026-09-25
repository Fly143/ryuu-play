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

export class DawnWingsNecrozmaSM106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gulf Stream", cost: [], damage: "20+", text: "If you have exactly 6 Prize cards remaining, this attack does 20 more damage for each damage counter on this Pokémon." },
      { name: "Sword of Dawn", cost: [], damage: "130", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "PR-SM";
  public name: string = "Dawn Wings Necrozma";
  public fullName: string = "Dawn Wings Necrozma PR-SM SM106";
  public text: string = "Dawn Wings Necrozma";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, Math.floor(effect.player.active.damage / 10));
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
