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

export class RadiantHisuianSneasler_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Peak", powerType: PowerType.ABILITY, text: "During Pokémon Checkup, put 2 more damage counters on your opponent's Poisoned Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Jab", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Poisoned." }
  ];
  public set: string = "ASR";
  public name: string = "Radiant Hisuian Sneasler";
  public fullName: string = "Radiant Hisuian Sneasler ASR 123";
  public text: string = "Radiant Hisuian Sneasler";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
