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

export class Pyroar_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Litleo";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scorching Aura", powerType: PowerType.ABILITY, text: "During Pokémon Checkup, put 4 damage counters on your opponent's Burned Pokémon instead of 2.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Fang", cost: [], damage: "90", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "ASR";
  public name: string = "Pyroar";
  public fullName: string = "Pyroar ASR 29";
  public text: string = "Pyroar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
