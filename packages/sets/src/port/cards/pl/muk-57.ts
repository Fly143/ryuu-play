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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Muk_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sludge Cell", powerType: PowerType.ABILITY, text: "If Muk remains affected by any Special Conditions between turns, remove 2 damage counters from Muk.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Strange Poison", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, Muk is now Poisoned." },
      { name: "Strange Sludge", cost: [], damage: "50+", text: "If Muk is Poisoned, this attack does 50 damage plus 20 more damage and the Defending Pokémon is now Confused." }
  ];
  public set: string = "PL";
  public name: string = "Muk";
  public fullName: string = "Muk PL 57";
  public text: string = "Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
