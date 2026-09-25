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

export class MewtwoEX_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shatter Shot", cost: [], damage: "30×", text: "This attack does 30 damage times the amount of Psychic Energy attached to this Pokémon." },
      { name: "Damage Change", cost: [], damage: "", text: "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon." }
  ];
  public set: string = "BKP";
  public name: string = "Mewtwo-EX";
  public fullName: string = "Mewtwo-EX BKP 164";
  public text: string = "Mewtwo-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "swapDamageCounters");
    }
    return state;
  }
}
